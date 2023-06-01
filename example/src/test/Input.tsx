import { IconWorldUp } from '@tabler/icons-react';
import { Box, Button, Input } from 'kitten-core';
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
  const [error, setError] = useState(false);

  return (
    <Box className="overflow-x-hidden">
      <Box className="w-screen p-5 h-screen bg-white dark:bg-dark-700 p-0 overflow-auto">
        <Button
          onClick={() => {
            changeTheme();
          }}>
          主题
        </Button>
        <Button
          onClick={() => {
            setDisabled(!disabled);
          }}>
          setDisabled
        </Button>
        <Button
          onClick={() => {
            setError(!error);
          }}>
          setError
        </Button>
        {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
          return (
            <div key={size}>
              <Input
                size={size}
                className="m-2"
                icon={<IconWorldUp />}
                rightSection={<div>@</div>}
                placeholder="哈哈"
                error={error}
                disabled={disabled}
              />

              <Input
                size={size}
                className="m-2"
                icon={<IconWorldUp />}
                rightSection={<div>@</div>}
                placeholder="哈哈"
                error={error}
                variant="filled"
                disabled={disabled}
              />
              <Input
                size={size}
                className="m-2"
                icon={'@'}
                rightSection={<div>@</div>}
                placeholder="哈哈"
                error={error}
                variant="subtle"
                disabled={disabled}
              />
            </div>
          );
        })}
      </Box>
    </Box>
  );
}

export default KittenCore;
