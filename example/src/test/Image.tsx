import { Image, Box, Button } from '@kitten-ui/core';
// import { Image } from '@mantine/core';
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
        <Image
          width={100}
          height={100}
          radius="lg"
          src={
            'https://role2.oss-cn-hangzhou.aliyuncs.com/2e7f87fbc1770e8bef772e9ef6f1f4c6'
          }
          withPlaceholder
          caption="哈哈"
        />
        <Image
          width={100}
          height={100}
          radius="lg"
          src={
            'httaps://role2.oss-cn-hangzhou.aliyuncs.com/2e7f87fbc1770e8bef772e9ef6f1f4c6'
          }
          withPlaceholder
          caption="哈哈"
        />
      </Box>
    </Box>
  );
}

export default KittenCore;
