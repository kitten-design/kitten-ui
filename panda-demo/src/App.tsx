import React, { useEffect, useRef } from 'react';

import { Box, Button } from './';

export default function App() {
  const [theme, setTheme] = React.useState('light');
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <Box className={theme} w="100vw" h="100vh">
      <Button
        fullWidth
        ref={ref}
        rounded={'lg'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      {new Array(1).fill(1).map((v, i) => {
        return (
          <Box key={i} as="p">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
              return (
                <span key={size}>
                  {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => {
                    return (
                      <Button
                        key={size + radius}
                        size={size}
                        rounded={radius}
                        compact={theme !== 'light'}
                        disabled={theme !== 'light'}>
                        按钮
                      </Button>
                    );
                  })}
                </span>
              );
            })}
          </Box>
        );
      })}
      <Box as="p">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
          return (
            <span key={size}>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => {
                return (
                  <Button
                    key={size + radius}
                    colorPalette="red"
                    size={size}
                    rounded={radius}
                    compact={theme === 'light'}
                    disabled={theme === 'light'}>
                    按钮
                  </Button>
                );
              })}
            </span>
          );
        })}
      </Box>
      hello world
    </Box>
  );
}
