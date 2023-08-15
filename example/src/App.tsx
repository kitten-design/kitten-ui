import { Button, Center, CloseButton } from '@kitten-ui/core';
import { DataSet, observer } from '@kitten-ui/dataset';

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
  return (
    <div>
      <Button colorPalette="red" variant="outline">
        按钮
      </Button>
      <Center inline w="200px" h="200px">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <CloseButton key={size} size={size} />
        ))}
      </Center>
      <Input />
    </div>
  );
}
