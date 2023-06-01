import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { DataSet } from './DataSet';
import { RecordData } from './Record';

export function useDataSet<T extends RecordData>(dataSet: DataSet<T>) {
  const data = useSnapshot(dataSet);

  useEffect(() => {
    if (data.autoQuery && !data.loaded && !data.loading) {
      data.query();
    }
  }, []);

  return data;
}
