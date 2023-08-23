import React from 'react';

import { Box, Button, Tag } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button
        variant="default"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        colorPalette={'red'}>
        切换
      </Button>
      <br />
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="filled">
            标签
          </Tag>
        );
      })}
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="default">
            标签
          </Tag>
        );
      })}
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="gradient">
            标签
          </Tag>
        );
      })}
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="light">
            标签
          </Tag>
        );
      })}
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="outline">
            标签
          </Tag>
        );
      })}
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="transparent">
            标签
          </Tag>
        );
      })}
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="white">
            标签
          </Tag>
        );
      })}
    </Box>
  );
};
export default App;
