import React from 'react';

import { Box, Button, CloseButton, Title } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      123
      <Button
        variant="default"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        colorPalette={'red'}>
        切换
      </Button>
      <CloseButton></CloseButton>
      <Title order={1}>This is title</Title>
      <Title order={2}>This is title</Title>
      <Title order={3}>This is title</Title>
      <Title order={4}>This is title</Title>
      <Title order={5}>This is title</Title>
      <Title order={6}>This is title</Title>
    </Box>
  );
};
export default App;
