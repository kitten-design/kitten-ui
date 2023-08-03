import React from 'react';
import { Box, Button } from './';

export default function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      <Box className={theme}>
        {(['xs', 'sm', 'md', 'lg', 'xl', 'full'] as const).map((radius) => {
          return (
            <span key={radius}>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
                return (
                  <Button
                    borderRadius={radius}
                    size={size}
                    compact={theme !== 'light'}>
                    按钮
                  </Button>
                );
              })}
            </span>
          );
        })}
      </Box>
    </>
  );
}
