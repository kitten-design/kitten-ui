import React from 'react';

import { Box, Button, Container, Popover, Tooltip } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </Button>
      <Container bg="red.100">
        <Box bg="green.100">123</Box>
      </Container>
      <Tooltip label="123123">
        <Button>123123</Button>
      </Tooltip>
      <br />
      <Popover
        children={<Button children="按钮" />}
        label={<Box w="100px" h="100px" children="hello" />}
      />
    </Box>
  );
};
export default App;
