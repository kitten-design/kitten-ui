import React from 'react';

import { Box, Button } from './';
import { CloseButton } from './components/CloseButton';
export default function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button
        loading
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <CloseButton size={size} colorPalette={'red'} />
      ))}
    </Box>
  );
}
