import React from 'react';

import { Box, Button } from './';
import { BackTop } from './components/BackTop';

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
      <BackTop>回到顶部</BackTop>
      <Box h="200vh" bg="red.100">
        123
      </Box>
    </Box>
  );
};
export default App;
