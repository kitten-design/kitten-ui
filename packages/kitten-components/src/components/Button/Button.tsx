import React from 'react';
import { css } from '@kitten-ui/styles/css';

export function Button() {
  return (
    <button
      className={css({
        border: '1px solid red',
        bg: 'red.500',
        fontSize: 'lg',
      })}>
      123
    </button>
  );
}
