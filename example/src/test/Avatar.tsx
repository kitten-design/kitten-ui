import { Box, Button } from '@kitten-ui/core';
// import { Avatar } from '@mantine/core';
import { Avatar } from '@kitten-ui/core';

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
        {['filled', 'outline', 'gradient', 'light'].map((variant) => {
          return (
            <div>
              {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
                return (
                  <Avatar
                    className="inline-block"
                    variant={variant}
                    size={size}
                    gradient={{ from: 'indigo', to: 'cyan' }}>
                    asdf
                  </Avatar>
                );
              })}
            </div>
          );
        })}
        {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
          return (
            <Avatar
              className="inline-block"
              src={
                'https://role2.oss-cn-hangzhou.aliyuncs.com/2e7f87fbc1770e8bef772e9ef6f1f4c6'
              }
              size={size}>
              徽标
            </Avatar>
          );
        })}
        {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
          return <Avatar className="inline-block" size={size} />;
        })}
        {['xs', 'sm', 'md', 'lg', 'xl'].map((_size) => {
          return (
            <Avatar.Group spacing={_size} limit={3}>
              {[...new Array(3).fill(1)].map((size) => {
                return (
                  <Avatar
                    radius="1/2"
                    className="inline-block"
                    src={
                      'https://role2.oss-cn-hangzhou.aliyuncs.com/2e7f87fbc1770e8bef772e9ef6f1f4c6'
                    }
                    size={_size}>
                    徽标
                  </Avatar>
                );
              })}
              {1}
              {true}
              {undefined}
              {null}
              {'1'}
              <div>123</div>
              <div>456</div>
            </Avatar.Group>
          );
        })}
        <Avatar.Group spacing={'md'}></Avatar.Group>
      </Box>
    </Box>
  );
}

export default KittenCore;
