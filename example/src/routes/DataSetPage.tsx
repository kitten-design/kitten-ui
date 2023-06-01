import { Box, Button, Input, Tag } from '@kitten-ui/core';
import React from 'react';
import { DataSet, useDataSet } from '../DataSet';

export const dataSet = DataSet({
  data: [{ name: '123', value: 'red' }, { name: '456' }],
  fields: [
    { name: 'name', type: 'string' },
    { name: 'value', type: 'number' },
  ],
});

const A = ({}) => {
  const data = useDataSet(dataSet);

  return (
    <React.Fragment>
      <Button
        color="yellow"
        variant="outline"
        onClick={() => {
          data.query();
        }}
        loading={data.loading}>
        增加
      </Button>
      <Button
        color="teal"
        variant="outline"
        onClick={() => {
          data.query();
        }}
        loading={data.loading}>
        增加
      </Button>
      <Button
        color="lime"
        variant="subtle"
        onClick={() => {
          data.pop();
        }}>
        减少
      </Button>
      <B key="3" />
      <C key="2" />
      <Box>
        {data.map((r, i) => (
          <Tag key={i}>{r.get('name')}</Tag>
        ))}
      </Box>
      {data.length}
      {data._id}
    </React.Fragment>
  );
};

export default () => {
  return <>{new Array(1).fill(<A key="1" />)}</>;
};

function B() {
  const data = useDataSet(dataSet);

  return (
    <div>
      <Input
        value={data.records[0]?.get('name') || ''}
        onChange={(event: any) => {
          data.records[0]?.set('name', event.target.value);
        }}
        disabled={!data.records[0]}></Input>
    </div>
  );
}

function C() {
  const data = useDataSet(dataSet);

  return (
    <div>
      <Input
        value={data.records[0]?.get('value') || ''}
        onChange={(event: any) => {
          data.records[0]?.set('value', event.target.value);
        }}
        disabled={true}></Input>
    </div>
  );
}
