import { Text, Box, Button } from '@kitten-ui/core';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  return (
    <Box className="w-screen h-screen bg-white dark:bg-black p-0 overflow-auto">
      <Button
        variant={'default'}
        onClick={() => {
          changeTheme();
        }}>
        主题
      </Button>
      {/*  */}
      <Box>
        <Text lineClamp={3} color="red">
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world hello world hello world
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world hello world hello world
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world hello world hello world
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world hello world hello world
          hello world hello world hello world hello world hello world hello
          world hello world hello world hello world hello world hello world
          hello world hello world hello world hello world hello world hello
          world hello world hello world
        </Text>
        <Text
          variant="gradient"
          gradient={{ from: 'dark', to: 'red' }}
          align="center"
          size="xl"
          weight="bold">
          Indigo cyan gradient
        </Text>
      </Box>
    </Box>
  );
}

export default KittenCore;
