import { Box } from '@kitten-ui/components';
import { css } from '@kitten-ui/styles/css';
import React from 'react';

export default function App() {
  return (
    <div className={css({ layerStyle: 'abc' })}>
      This is inside a container style
    </div>
  );
}
