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
        切换
      </Button>
      <Button variant="filled" size="xl">
        Button
      </Button>
      {(['inner', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return <Box key={v} w="100px" h="100px" shadow={v} m="10px" />;
      })}
    </Box>
  );
};
export default App;
