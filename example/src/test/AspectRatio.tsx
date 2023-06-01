import { AspectRatio, Box, Button, Image } from '@kitten-ui/core';

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
      <AspectRatio ratio={9 / 6} className="mx-auto max-w-[300px]">
        <Box className="w-[1000px] h-[2000px] bg-red-600">
          <Button>123123</Button>
        </Box>
      </AspectRatio>
    </Box>
  );
}

export default KittenCore;
