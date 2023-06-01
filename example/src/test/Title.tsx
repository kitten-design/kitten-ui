import { Title, Box, Button } from '@kitten-ui/core';
// import {  } from '@mantine/core';
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
        <Title order={1}>The quick brown fox jumps over the lazy dog.</Title>
        <Title order={2}>The quick brown fox jumps over the lazy dog.</Title>
        <Title order={3}>The quick brown fox jumps over the lazy dog.</Title>
        <Title order={4}>The quick brown fox jumps over the lazy dog.</Title>
        <Title order={5}>The quick brown fox jumps over the lazy dog.</Title>
        <Title order={6}>The quick brown fox jumps over the lazy dog.</Title>
      </Box>
    </Box>
  );
}

export default KittenCore;
