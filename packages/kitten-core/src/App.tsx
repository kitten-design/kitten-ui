import React from 'react';

import { Box, Button } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </Button>
    </Box>
  );
};
export default App;
