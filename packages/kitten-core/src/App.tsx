import React from 'react';

import { Box, Button } from './';
import { Image } from './components/Image';

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
      <Image
        bg="red.500!"
        src="https://cdn=16702273571"
        placeholder="图片加载失败"></Image>
      <Image src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=16702273571"></Image>
    </Box>
  );
};
export default App;
