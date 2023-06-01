import { Box, Button, Transition } from '@kitten-ui/core';
import { useState } from 'react';
import { Chrome } from '../components/Chrome';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  const [opened, setOpened] = useState(false);

  return (
    <Box className="w-screen h-screen bg-white dark:bg-black p-0 overflow-auto">
      <Button
        onClick={() => {
          changeTheme();
        }}>
        主题
      </Button>
      <Button
        onClick={() => {
          setOpened(!opened);
        }}>
        切换portal
      </Button>

      <Chrome label="Transition" center>
        <Transition
          mounted={opened}
          transition="fade"
          duration={400}
          timingFunction="ease">
          {(styles) => <div style={styles}>Your modal</div>}
        </Transition>
      </Chrome>
    </Box>
  );
}

export default KittenCore;
