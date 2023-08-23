import {
  Affix,
  Anchor,
  Badge,
  Button,
  Center,
  CloseButton,
  Transition,
} from '@kitten-ui/core';
import { DataSet, observer } from '@kitten-ui/dataset';
import { useState } from 'react';

const ds = DataSet([{ a: '' }]);

ds.current.data.onChange(() => {
  console.log(ds.current.data.get());
});

const Input = observer(() => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          ds.current.setValue('a', e.target.value);
        }}
      />
      {ds.current.getValue('a')}
    </>
  );
});

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
      <Transition transition="pop" mounted={theme === 'light'}>
        {(style) => {
          return (
            <Center inline w="200px" h="200px" bg="red.600" style={style}>
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <CloseButton key={size} size={size} />
              ))}
            </Center>
          );
        }}
      </Transition>
      <Input />
      <Anchor />
      <Affix>
        <Badge processing>
          <Button variant="filled" size="xl">
            回到顶部
          </Button>
        </Badge>
      </Affix>
    </div>
  );
}
