import React from 'react';

import { Box, Button, Tooltip } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Tooltip
        label={
          ' undefined undefinedundefinundefined undefinedundefinundefined undefinedundefinundefined undefinedundefinundefined undefinedundefinundefined undefinedundefinundefined undefinedundefined undefined'
        }>
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle theme
        </Button>
      </Tooltip>
    </Box>
  );
};
export default App;
