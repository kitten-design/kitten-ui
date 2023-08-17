import React from 'react';

import { Anchor, Box, Button } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      <Anchor href="" target="_blank">
        Anchor component
      </Anchor>
    </Box>
  );
};
export default App;
