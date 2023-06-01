import { IconArrowLeft } from '@tabler/icons-react';
import { Anchor, Box, Button, Center } from 'kitten-core';
import { rem } from 'kitten-styles';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  return (
    <Box className="w-screen p-5 h-screen bg-white dark:bg-dark-700 p-0 overflow-auto">
      <Button
        onClick={() => {
          changeTheme();
        }}>
        主题
      </Button>

      <Center>
        <Button>123123</Button>
      </Center>
      <Center>
        <div>All elements inside Center are centered</div>
      </Center>
      <Anchor href="https://mantine.dev" target="_blank">
        <Center inline>
          <IconArrowLeft size={rem(14)} />
          <Box className="ml-[5px]">Back to Mantine website</Box>
        </Center>
      </Anchor>
    </Box>
  );
}

export default KittenCore;
