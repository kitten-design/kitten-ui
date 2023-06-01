import { proxy, ref } from 'valtio';
import { DataSet } from './DataSet';

export type RecordData = { [K in string | number | symbol]: any };

export type Record<T extends RecordData> = {
  data: T;
  dataSet: DataSet<T>;
  set<K extends keyof T>(key: K, value: T[K]): void;
  get<K extends keyof T>(key: K): T[K];
};

export function Record<T extends RecordData>(data: T, dataSet: DataSet<T>) {
  const id = `Record-${Math.random().toString(36).slice(2, 11)}`;

  const record = proxy({
    _id: id,
    data: data,
    dataSet: ref(dataSet),
    set: <K extends keyof T>(key: K, value: T[K]) => {
      record.data[key] = value;
    },
    get<K extends keyof T>(key: K) {
      return this.data[key];
    },
  });

  return record;
}
