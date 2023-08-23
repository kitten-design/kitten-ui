import { Button, Tag } from '@kitten-ui/core';
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

      <Tag variant="default">标签</Tag>
    </div>
  );
}
