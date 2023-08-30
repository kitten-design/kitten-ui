import React from 'react';

import { Box, Button } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button
        variant="default"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        colorPalette={'red'}>
        toggle theme
      </Button>
    </Box>
  );
};
export default App;
