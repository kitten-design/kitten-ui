import { Box, Button, Tooltip } from 'kitten-core';
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
  const [opened, setOpened] = useState(true);

  return (
    <Box className="w-screen p-5 h-screen bg-white dark:bg-dark-700 p-0 overflow-auto">
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
      <Tooltip.Group openDelay={500} closeDelay={100}>
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Tooltip.Group>
      <Chrome label="Tooltip" scrollable="y">
        {(
          [
            'top-start',
            'top',
            'top-end',
            'bottom-start',
            'bottom',
            'bottom-end',
            'left-end',
            'left',
            'left-start',
            'right-end',
            'right',
            'right-start',
          ] as const
        ).map((v) => (
          <Box className="m-20 inline-block">
            <Tooltip
              label={<>123123</>}
              color="orange"
              opened={opened}
              position={v}
              withArrow>
              <Button>{v}</Button>
            </Tooltip>
          </Box>
        ))}
      </Chrome>
    </Box>
  );
}

export default KittenCore;
