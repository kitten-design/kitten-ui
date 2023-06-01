import { IconAlertCircle } from '@tabler/icons-react';
import { Alert, Box, Button } from 'kitten-core';

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
      <Alert
        icon={<>123123</>}
        title="提示框标题"
        color="blue"
        withCloseButton
        variant="filled"
        className="m-5">
        提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容
      </Alert>
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="提示框标题"
        color="green"
        withCloseButton
        variant="light"
        className="m-5">
        提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容
      </Alert>
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="提示框标题"
        color="rose"
        withCloseButton
        variant="outline"
        className="m-5">
        提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容提示框内容
      </Alert>
    </Box>
  );
}

export default KittenCore;
