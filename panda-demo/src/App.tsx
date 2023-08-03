import React from 'react';
import { Box, Button } from './';

export default function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <Box className={theme} w="100vw" h="100vh">
      <Button
        rounded={'lg'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      <Box as="p">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
          return (
            <span key={size}>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => {
                return (
                  <Button
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
      <Box as="p">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
          return (
            <span key={size}>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => {
                return (
                  <Button
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
