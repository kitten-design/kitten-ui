import React from 'react';

import { Box, Button } from './';
import { Center } from './components/Center/Center';

export default function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>

      <Center bg="green.200" inline w="100px" h="100px">
        <Button>123</Button>
      </Center>
    </Box>
  );
}
