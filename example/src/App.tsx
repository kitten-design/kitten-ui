import { Avatar, Button, Tag } from '@kitten-ui/core';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <Button
        colorPalette="red"
        variant="outline"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}>
        按钮
      </Button>
      <br />

      <Avatar.Group limit={10} spacing={0}>
        <Avatar colorPalette="red" size="md" label="Yandif"></Avatar>
        <Avatar colorPalette="red" size="md" variant="gradient"></Avatar>
        <Avatar colorPalette="red" size="md" variant="filled"></Avatar>
        <Avatar colorPalette="red" size="md" variant="transparent"></Avatar>
        <Avatar colorPalette="red" size="md" variant="outline"></Avatar>
        <Avatar colorPalette="red" size="md" variant="default"></Avatar>
        <Avatar colorPalette="red" size="md" variant="white"></Avatar>
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>{' '}
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>{' '}
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>{' '}
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>
        <Avatar
          size="md"
          src="https://cdn.v2ex.com/avatar/89d5/0e8a/184669_large.png?m=1670227357"></Avatar>
      </Avatar.Group>
    </div>
  );
}
