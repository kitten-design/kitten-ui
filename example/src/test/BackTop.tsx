import { BackTop, Box, Button } from '@kitten-ui/core';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
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
      <BackTop>123</BackTop>
      <div className="h-[1000px]">123</div>
    </Box>
  );
}

export default KittenCore;
