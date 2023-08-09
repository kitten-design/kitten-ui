import React from 'react';

import { Box, Button, Portal } from '../';

export default function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box
      id="back"
      className={theme}
      w="100vw"
      h="100vh"
      position="relative"
      styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      <Portal
        target="#back"
        css={{
          position: 'absolute',
          display: 'inline-block',
          right: 0,
          bottom: 0,
          color: { base: 'black', _dark: 'white' },
        }}>
        132
      </Portal>
    </Box>
  );
}
