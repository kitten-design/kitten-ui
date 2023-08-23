import React from 'react';

import { Box, Button, Divider, Tag } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      123
      <Button
        variant="default"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        colorPalette={'red'}>
        切换
      </Button>
      <br />
      <Divider size="xs" />
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="filled">
            标签
          </Tag>
        );
      })}
      <Divider size="sm" />
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="default">
            标签
          </Tag>
        );
      })}
      <Divider
        size="md"
        label="哈哈哈哈"
        borderColor="green.600"
        css={{
          '& [data-divider-label]': {
            color: 'green.600',
          },
        }}
        labelPosition="left"
      />
      <Divider size="md" borderStyle="dotted" label="哈哈哈哈" />
      <Divider size="md" label="哈哈哈哈" labelPosition="right" />
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="gradient">
            标签
          </Tag>
        );
      })}
      <Divider size="lg" vertical />
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((v) => {
        return (
          <Tag key={v} size={v} variant="light">
            标签
          </Tag>
        );
      })}
      <Divider vertical mx="md" />
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
