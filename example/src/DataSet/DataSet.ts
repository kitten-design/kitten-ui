import { proxy } from 'valtio';
import { Record, RecordData } from './Record';
import { RequestMethods } from './Request';
import { DataSetConfig, mergeConfig } from './config';

export type DataSet<T extends RecordData> = {
  _id: string;
  autoQuery: boolean;
  current?: Record<T>;
  records: Record<T>[];
  loading: boolean;
  loaded: boolean;
  methods: RequestMethods;
  length: number;
  init(): void;
  query(): void;
  push(...items: Record<T>[]): number;
  pop(): Record<T> | undefined;
  unshift(...items: Record<T>[]): number;
  shift(): Record<T> | undefined;
  find(
    predicate: (value: Record<T>, index: number, obj: Record<T>[]) => unknown,
  ): Record<T> | undefined;
  findIndex(
    predicate: (value: Record<T>, index: number, obj: Record<T>[]) => unknown,
  ): number;
  forEach(
    callbackfn: (value: Record<T>, index: number, array: Record<T>[]) => void,
  ): void;
  map<R>(
    callbackfn: (value: Record<T>, index: number, array: Record<T>[]) => R,
  ): R[];
};

export function DataSet<T extends RecordData>(config?: DataSetConfig<T>) {
  const { methods, data, axios, autoQuery } = mergeConfig(config);

  const id = `DataSet-${Math.random().toString(36).slice(2, 11)}`;

  const dataSet = proxy<DataSet<T>>({
    _id: id,
    autoQuery,
    methods,
    current: undefined,
    records: [],
    loading: false,
    loaded: false,
    init,
    query,
    get length() {
      return this.records.length;
    },
    push(...items): number {
      return dataSet.records.push(...items);
    },
    pop(): Record<T> | undefined {
      const record = dataSet.records.pop();
      if (dataSet.current === record) {
        dataSet.current = undefined;
      }
      return record;
    },
    unshift(...items): number {
      return dataSet.records.unshift(...items);
    },
    shift(): Record<T> | undefined {
      const record = dataSet.records.shift();
      if (dataSet.current === record) {
        dataSet.current = undefined;
      }
      return record;
    },
    find(predicate) {
      return this.records.find(predicate);
    },
    findIndex(predicate) {
      return this.records.findIndex(predicate);
    },
    forEach(callbackfn) {
      this.records.forEach(callbackfn);
    },
    map(callbackfn) {
      return this.records.map(callbackfn);
    },
  });

  function init() {
    dataSet.records = data.map((data) => Record(data, dataSet));
    dataSet.current = dataSet.records[0];
  }
  dataSet.init();

  async function query() {
    if (dataSet.loading) return;
    try {
      dataSet.loading = true;

      const res = await axios.get('/pokemon/ivysaur');

      setTimeout(() => {
        dataSet.records = res.data.forms.map((d: T) => Record(d, dataSet));
        dataSet.current = dataSet.records[0];
        dataSet.loaded = true;
        dataSet.loading = false;
      }, 1000);
    } catch {
      dataSet.loading = false;
    }
  }

  return dataSet;
}
