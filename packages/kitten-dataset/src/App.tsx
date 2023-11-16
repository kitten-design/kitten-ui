import React from 'react';

import { DataSet } from './core/DataSet';

const ds = DataSet([
  { a: 123, bb: 456, c: 789 },
  { a: 2, bb: 3, c: 4 },
]);

export const App = () => {
  const data = ds.current;

  return (
    <div
      onClick={() => {
        console.log(ds.current.get() === ds.records[0].get());
        ds.current.set(
          ds.records[0].get() === ds.current.get() ? ds.records[1].get() : ds.records[0].get(),
        );
        console.log(ds.toData());
      }}>
      切换
      {JSON.stringify(data.toData())}
      {data.data.a}
    </div>
  );
};
