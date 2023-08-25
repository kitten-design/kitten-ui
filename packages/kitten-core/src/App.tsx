import { Icon123 } from '@tabler/icons-react';
import React from 'react';

import { Box, Button } from './';
import { Toast } from './components/Toast';

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
      <Toast
        colorPalette={'red'}
        icon={<Icon123 />}
        title="标题"
        withCloseButton>
        内容
      </Toast>
      <Toast
        colorPalette={'green'}
        loading
        icon={<Icon123 />}
        title="标题"
        withCloseButton>
        内容
      </Toast>
      <Toast colorPalette={'green'} loading icon={<Icon123 />} withCloseButton>
        内容
      </Toast>
    </Box>
  );
};
export default App;
