import { observer } from '@legendapp/state/react';

import { DataSet } from './core/DataSet';

const ds = DataSet([{ a: 123, bb: 456, c: 789 }]);

export const App = observer(() => {
  console.log(ds);

  return (
    <div onClick={() => {}}>
      Theme: {JSON.stringify(ds.current?.data.get())}
    </div>
  );
});
