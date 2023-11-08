import type { Observable } from '@legendapp/state';
import { isArray, isObject, isString, observable, opaqueObject } from '@legendapp/state';

import type { DataSet } from './DataSet';

type PickValues<T, K extends Array<keyof T>> = {
  [P in K[number]]: T[P];
};

export type RecordData = { [K in string | number | symbol]: any };

export type Record<T extends RecordData> = {
  data: Observable<T>;
  dataSet: Observable<DataSet<T>>;
  setValue<K extends keyof Observable<T>>(key: K, value?: T[K]): void;
  setValue<K extends keyof Observable<T>>(obj: Partial<T>, _?: K): void;
  getValue<K extends keyof Observable<T>>(key: K): T[K];
  getValue<K extends keyof Observable<T>, A extends K[]>(keys: A): PickValues<T, A>;
  toData(): T;
};

export const Record = <T extends RecordData>(data: T, dataSet: Observable<DataSet<T>>) => {
  const record: Record<T> = {
    data: observable(data),
    dataSet,
    setValue: (key, value) => {
      if (isString(key)) {
        (record.data[key] as any).set(value);
      }
      if (isObject(key)) {
        (Object.keys(key) as (keyof Observable<T>)[]).forEach((k) => {
          (record.data[k] as any).set(key[k]);
        });
      }
    },
    getValue: <K extends keyof Observable<T>>(key: K | K[]) => {
      if (isString(key)) {
        return (record.data[key] as any).get();
      }
      if (isArray(key)) {
        const result: Partial<T> = {};
        key.map((k) => {
          result[k] = (record.data[k] as any).get();
        });
        return result;
      }
    },
    toData: () => {
      return record.data.get();
    },
  };

  return opaqueObject(record);
};
