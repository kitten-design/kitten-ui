import { Button, Center, CloseButton } from '@kitten-ui/core';

export default function App() {
  return (
    <div>
      <Button colorPalette="red" variant="outline">
        按钮
      </Button>
      <Center inline w="200px" h="200px">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <CloseButton size={size} />
        ))}
      </Center>
    </div>
  );
}
