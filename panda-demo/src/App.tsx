import React from 'react';
import { Box, Button } from './';

export default function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <Box className={theme} w="100vw" h="100vh">
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      <Box as="p">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => {
          return (
            <span key={radius}>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
                return (
                  <Button
                    borderRadius={radius}
                    size={size}
                    radius={radius}
                    compact={theme !== 'light'}>
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
