import { Box } from '@kitten-ui/core';
import { useState } from 'react';
import { Button } from '@kitten-ui/components';

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
      </Box>
    </Box>
  );
}

export default KittenCore;
