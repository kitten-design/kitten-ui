import React from 'react';

import { Box, Button } from './';
import { Avatar } from './components/Avatar';

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
      <Avatar.Group limit={10} spacing={0}>
        <Avatar colorPalette="red" size="md" label="Yandif"></Avatar>
        <Avatar colorPalette="red" size="md" variant="gradient"></Avatar>
        <Avatar colorPalette="red" size="md" variant="filled"></Avatar>
        <Avatar colorPalette="red" size="md" variant="transparent"></Avatar>
        <Avatar colorPalette="red" size="md" variant="outline"></Avatar>
        <Avatar colorPalette="red" size="md" variant="default"></Avatar>
        <Avatar colorPalette="red" size="md" variant="white"></Avatar>
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>{' '}
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>{' '}
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>{' '}
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>
      </Avatar.Group>
    </Box>
  );
};
export default App;
