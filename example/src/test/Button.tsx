import { IconAlignBoxLeftTop, IconSettings } from '@tabler/icons-react';
import { Box, Button } from 'kitten-core';
import { useState } from 'react';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  const [loading, setLoading] = useState(false);
  const [compact, setCompact] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);

  return (
    <Box className="w-screen h-screen bg-white dark:bg-black p-0 overflow-auto">
      <Button.Group>
        <Button
          variant={'default'}
          onClick={() => {
            changeTheme();
          }}>
          主题
        </Button>
        <Button
          variant={'default'}
          onClick={() => {
            console.log(
              document.querySelector<HTMLStyleElement>('[data-twind]')
                ?.innerText,
            );
          }}>
          log
        </Button>
        <Button
          variant={'default'}
          onClick={() => {
            setCompact(!compact);
          }}>
          compact
        </Button>
        <Button
          variant={'default'}
          onClick={() => {
            setLoading(!loading);
          }}>
          loading
        </Button>
        <Button
          variant={'default'}
          onClick={() => {
            setFullWidth(!fullWidth);
          }}>
          fullWidth
        </Button>
      </Button.Group>

      {[
        'filled',
        'outline',
        'default',
        'white',
        'subtle',
        'gradient',
        'light',
      ].map((variant) => {
        return (
          <Box key={variant}>
            {['none', 'xs', 'sm', 'md', 'lg', 'xl', '1/2', 'full'].map(
              (radius) => {
                return (
                  <Box key={`${variant}`}>
                    {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
                      return (
                        <Button
                          key={`${variant}-${size}`}
                          loaderPosition="center"
                          loading={loading}
                          compact={compact}
                          fullWidth={fullWidth}
                          leftIcon={<IconAlignBoxLeftTop size={30} />}
                          rightIcon={<IconAlignBoxLeftTop size={30} />}
                          radius={radius}
                          size={size}
                          variant={variant}
                          gradient={{ from: 'indigo', to: 'cyan' }}>
                          按钮123123
                        </Button>
                      );
                    })}
                  </Box>
                );
              },
            )}
          </Box>
        );
      })}

      <Button.ActionIcon variant={'filled'} color="blue">
        <IconSettings size="1rem" />
      </Button.ActionIcon>
      <Button.ActionIcon>
        <IconSettings size="1rem" />
      </Button.ActionIcon>
      <Button.ActionIcon disabled>
        <IconSettings size="1rem" />
      </Button.ActionIcon>

      <Button.CloseButton loading></Button.CloseButton>
      <Button.CloseButton></Button.CloseButton>
      <Button.CloseButton disabled></Button.CloseButton>
      <Button.CopyButton value="哈哈">
        {({ copied, copy }) => (
          <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
            {copied ? '复制成功' : '复制'}
          </Button>
        )}
      </Button.CopyButton>
    </Box>
  );
}

export default KittenCore;
