import React from 'react';

import { Box, Button, Container } from './';

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
    </Box>
  );
};
export default App;
