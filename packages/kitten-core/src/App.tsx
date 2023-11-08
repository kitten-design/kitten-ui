import React from 'react';

import { Box, Button, Popover, Tooltip } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</Button>

      <br />
      <Tooltip label={'Tooltip'}>
        <span>Toggle theme</span>
      </Tooltip>

      <br />
      <br />
      <Box p="100px">
        <Popover
          withArrow={false}
          content={
            <Box>
              <Button children="按钮" />
              <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle theme
              </Button>
            </Box>
          }>
          <Button children="按钮" />
        </Popover>
      </Box>
    </Box>
  );
};
export default App;
