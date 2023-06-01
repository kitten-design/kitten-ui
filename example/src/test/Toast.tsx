import { Icon360View } from '@tabler/icons-react';
import { Box, Button, Toast, toast, Toaster } from 'kitten-core';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}
let a = 0;
function KittenCore() {
  return (
    <Box className="w-screen p-5 h-screen bg-white dark:bg-dark-700 p-0 overflow-auto">
      <Button
        onClick={() => {
          changeTheme();
        }}>
        主题
      </Button>
      <Toaster />
      <Toast title="Default notification" color="rose">
        This is default notification with title and body
      </Toast>
      <Toast title="Default notification" loading>
        This is default notification with title and body
      </Toast>
      <Toast icon={<Icon360View></Icon360View>} title="Default notification">
        This is default notification with title and body
      </Toast>
      <Toast>This is default notification with title and body</Toast>
      <Button
        onClick={() => {
          a++;
          toast({ message: 'haha', title: '提示', withCloseButton: true });
        }}>
        Toast
      </Button>

      <Button
        onClick={() => {
          toast.clear();
        }}>
        clear
      </Button>
    </Box>
  );
}

export default KittenCore;
