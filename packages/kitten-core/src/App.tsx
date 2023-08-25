import { IconCheck } from '@tabler/icons-react';
import React from 'react';

import { Box, Button, toast, Toaster, toastStore } from './';

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
      <Button
        onClick={() => {
          (
            [
              'top-left',
              'top',
              'top-right',
              'bottom-left',
              'bottom',
              'bottom-right',
            ] as const
          ).forEach((element) => {
            toast({
              position: element,
              icon: <IconCheck />,
              title: '标题',
              message: '哈哈哈' + Math.random(),
              css: { colorPalette: Math.random() > 0.5 ? 'green' : 'blue' },
              withCloseButton: true,
              autoClose: false,
            });
          });
        }}>
        点击
      </Button>
      <Button
        variant="subtle"
        onClick={() => {
          toast({
            id: 'a',
            icon: <IconCheck />,
            title: '标题'.repeat(100),
            message: '哈哈哈'.repeat(100) + Math.random(),
            css: { colorPalette: 'blue' },
            withCloseButton: true,
            autoClose: false,
          });
        }}>
        点击
      </Button>
      <Button
        variant="light"
        onClick={() => {
          console.log(toastStore.toData());
        }}>
        打印数据
      </Button>
      <Toaster className={theme} />
    </Box>
  );
};
export default App;
