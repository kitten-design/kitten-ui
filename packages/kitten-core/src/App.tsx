import { Icon123, IconAdjustments, IconClock } from '@tabler/icons-react';
import React from 'react';

import { ActionIcon, Box, Button } from './';
export default function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button
        loading
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <ActionIcon size={size} variant="outline" loading={theme === 'light'}>
          <IconAdjustments />
        </ActionIcon>
      ))}
      <br />
      <ActionIcon.Group>
        <ActionIcon variant="outline" loading={theme !== 'light'}>
          <IconAdjustments />
        </ActionIcon>
        <ActionIcon variant="outline" loading={theme === 'light'}>
          <Icon123 />
        </ActionIcon>
        <ActionIcon variant="outline" loading={theme !== 'light'}>
          <IconClock />
        </ActionIcon>
      </ActionIcon.Group>
    </Box>
  );
}
