import React from 'react';
import { css } from 'style-engine/css';

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
