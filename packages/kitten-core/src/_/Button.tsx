import { IconDownload, IconPhoto } from '@tabler/icons-react';
import React from 'react';

import { Box, Button } from '../';

export default function App() {
  const [theme, setTheme] = React.useState('light');
  const [loading, setLoading] = React.useState(false);

  return (
    <Box className={theme} w="100vw" h="100vh" styled>
      {(
        [
          'outline',
          'light',
          'default',
          'transparent',
          'white',
          'filled',
          'subtle',
          'gradient',
        ] as const
      ).map((v) => {
        return (
          <Button
            variant={v}
            leftSection={<IconPhoto size={14} />}
            rightSection={<IconDownload size={14} />}
            loading={loading}
            onClick={() => {
              console.log('123');
            }}>
            切换
          </Button>
        );
      })}
      <Button
        onClick={() => {
          setLoading(!loading);
        }}>
        切换
      </Button>
      <Button
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconDownload size={14} />}
        rounded={'lg'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换
      </Button>
      {new Array(1).fill(1).map((_v, i) => {
        return (
          <Box key={i} as="p">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
              return (
                <span key={size}>
                  {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => {
                    return (
                      <Button
                        leftSection={<IconPhoto size={14} />}
                        rightSection={<IconDownload size={14} />}
                        key={size + radius}
                        size={size}
                        rounded={radius}
                        compact={theme === 'light'}
                        disabled={theme !== 'light'}>
                        按钮
                      </Button>
                    );
                  })}
                </span>
              );
            })}
          </Box>
        );
      })}
      <Box as="p">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
          return (
            <span key={size}>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => {
                return (
                  <Button
                    onClick={() => {
                      alert('123');
                    }}
                    key={size + radius}
                    colorPalette="red"
                    size={size}
                    rounded={radius}
                    compact={theme === 'light'}
                    disabled={theme === 'light'}>
                    按钮
                  </Button>
                );
              })}
            </span>
          );
        })}
      </Box>
      hello world
      {(
        [
          'outline',
          'light',
          'default',
          'transparent',
          'white',
          'filled',
          'subtle',
          'gradient',
        ] as const
      ).map((v) => {
        return (
          <div>
            <Button.ButtonGroup buttonBorderWidth={2}>
              123
              <Button variant={v}>切换</Button>
              <Button variant={v}> 切换</Button>
              <Button variant={v}>切换</Button>
            </Button.ButtonGroup>
            <Button.ButtonGroup vertical buttonBorderWidth={1}>
              123
              <Button variant={v}>切换</Button>
              <Button variant={v}>切换</Button>
              <Button variant={v}>切换</Button>
            </Button.ButtonGroup>
          </div>
        );
      })}
    </Box>
  );
}
