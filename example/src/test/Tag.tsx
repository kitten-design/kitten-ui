import { Tag, Box, Button } from '@kitten-ui/core';

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
      <Box>
        {['filled', 'outline', 'gradient', 'light'].map((variant) => {
          return (
            <div>
              {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
                return (
                  <Tag
                    variant={variant}
                    size={size}
                    gradient={{ from: 'indigo', to: 'cyan' }}>
                    徽标
                  </Tag>
                );
              })}
            </div>
          );
        })}
      </Box>
    </Box>
  );
}

export default KittenCore;
