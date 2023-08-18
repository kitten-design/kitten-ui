import React from 'react';

import { Affix, Badge, Box, Button } from './';

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

      <br />

      <Badge>
        <Button variant="filled" size="xl">
          Button
        </Button>
      </Badge>
      {(['inner', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return <Box key={v} w="100px" h="100px" shadow={v} m="10px" />;
      })}
      <Affix>
        <Badge processing>
          <Button variant="filled" size="xl">
            回到顶部
          </Button>
        </Badge>
      </Affix>
    </Box>
  );
};
export default App;
