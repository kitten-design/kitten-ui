import { IconClearAll } from '@tabler/icons-react';
import { Box, Button, Badge, Avatar } from 'kitten-core';
import { useState } from 'react';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  const [disabled, setDisabled] = useState(false);
  return (
    <Box className="w-screen h-screen bg-white dark:bg-black p-0 overflow-auto">
      <Button
        variant={'default'}
        onClick={() => {
          changeTheme();
        }}>
        主题
      </Button>
      <Button
        variant={'default'}
        onClick={() => {
          setDisabled(!disabled);
        }}>
        切换：{disabled + ''}
      </Button>
      <Box>
        {['filled', 'outline', 'gradient', 'light'].map((variant) => {
          return (
            <div>
              {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
                return (
                  <Badge
                    color="yellow"
                    disabled={disabled}
                    position="bottom-end">
                    <Avatar radius={'full'} />
                  </Badge>
                );
              })}
            </div>
          );
        })}
      </Box>
    </Box>
  );
}

export default KittenCore;
