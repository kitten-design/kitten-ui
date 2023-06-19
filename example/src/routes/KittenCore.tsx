// import { Box } from '@kitten-ui/core';
const Box = 'div';
import { useState } from 'react';
// import { Button } from '@kitten-ui/components';
import React from 'react';
import { css } from 'style-engine/css';
import { stack, circle } from 'style-engine/patterns';

export function Button() {
  return (
    <button
      className={css({
        border: '1px solid red',
        bg: 'primary',
        fontSize: 'lg',
        color: 'red',
      })}>
      123
    </button>
  );
}

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box className="overflow-x-hidden bg-red-100">
      <Box className="w-screen p-5 h-screen bg-white dark:bg-dark-700 p-0 overflow-auto">
        <Button
          onClick={() => {
            changeTheme();
          }}>
          主题
        </Button>
        <div className={stack({ direction: 'row', p: '4' })}>
          <div className={circle({ size: '5rem', overflow: 'hidden' })}>
            <img src="https://via.placeholder.com/150" alt="avatar" />
          </div>
          <div
            className={css({
              mt: '4',
              fontSize: 'xl',
              fontWeight: 'semibold',
            })}>
            John Doe
          </div>
          <div className={css({ mt: '2', fontSize: 'sm', color: 'gray.600' })}>
            john@doe.com
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default KittenCore;
