import React from 'react';

import { Box, Button, CloseButton, Tag } from './';
import { Alert } from './components/Alert';
import { ImageIcon } from './components/Image/ImageIcon';

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
      <CloseButton></CloseButton>
      <Alert
        colorPalette="green!"
        w="300px"
        title="title"
        icon={<ImageIcon />}
        variant="filled"
        withCloseButton
        onClose={() => {
          console.log(1123);
        }}>
        test{' '}
      </Alert>
      <Alert icon={<ImageIcon />} variant="outline">
        test{' '}
      </Alert>{' '}
      <Alert icon={<ImageIcon />} variant="light">
        test{' '}
      </Alert>
      <Alert icon={<ImageIcon />} variant="transparent">
        test{' '}
      </Alert>{' '}
      <Alert icon={<ImageIcon />} variant="white">
        test{' '}
      </Alert>
      <Alert icon={<ImageIcon />} variant="default">
        test{' '}
      </Alert>
    </Box>
  );
};
export default App;
