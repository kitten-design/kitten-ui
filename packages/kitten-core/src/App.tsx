import React from 'react';

import { Box, Button, Flex, toast, Toaster, Tooltip } from './';
let i = 0;
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

      <Button
        onClick={() => {
          i++;
          toast({
            message: `toast ${i}`,
            position: 'bottom-right',
            autoClose: false,
          });
        }}>
        toast
      </Button>
      <Flex alignItems={'center'} justifyContent={'center'} gap="xl">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Flex>
      <Toaster className={theme} />
    </Box>
  );
};
export default App;
