import React from 'react';
import { Box, Button } from './';
import { cva, cx, css } from '@kitten-ui/styles/css';

const someButton = cva({
  base: { padding: 4 },
  variants: {
    variant: {
      primary: {
        bg: { base: 'colorPalette.500', _dark: 'colorPalette.200' },
        color: { base: 'white', _dark: 'gray.900' },
      },
    },
  },
  defaultVariants: { variant: 'primary' },
});

export default function App() {
  return (
    <Box>
      <Button colorPalette={'blue'}>按钮</Button>
      <div className="light">
        <button className={cx(css({ colorPalette: 'blue' }), someButton())}>
          Click me
        </button>
        <button className={cx(css({ colorPalette: 'green' }), someButton())}>
          Click me
        </button>
        <button className={cx(css({ colorPalette: 'red' }), someButton())}>
          Click me
        </button>
      </div>
      <div className="dark">
        <button className={cx(css({ colorPalette: 'blue' }), someButton())}>
          Click me
        </button>
        <button className={cx(css({ colorPalette: 'green' }), someButton())}>
          Click me
        </button>
        <button className={cx(css({ colorPalette: 'red' }), someButton())}>
          Click me
        </button>
      </div>
    </Box>
  );
}
