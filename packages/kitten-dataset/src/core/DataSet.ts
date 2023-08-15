import { observable } from '@legendapp/state';

import type { RecordData } from './Record';
import { Record } from './Record';

export type DataSet<T extends RecordData> = {
  current?: Record<T>;
  records: Record<T>[];
};

export const DataSet = <T extends RecordData>(data: T[] = []) => {
  const dataSetOrigin: DataSet<T> = {
    current: undefined,
    records: [],
  };
  const dataSet = observable({
    ...dataSetOrigin,
    toData: () => {
      return dataSet.records.get().map((r) => r.toData());
    },
  });

  const loadData = (data: T[]) => {
    const records = data?.map((v) => Record(v, dataSet));
    dataSet.records.set(records);
    dataSet.current.set(records[0]);
  };

  // init data
  loadData(data);

  return dataSet;
};
