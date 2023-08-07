import { Button, Loader } from '@kitten-ui/core';
import { css } from '@kitten-ui/styles/css';

export default function Home() {
  return (
    <>
      <div className={css({ bg: 'blue.500' })}>123</div>
      <Button leftSection="哈哈">按钮</Button>
      <Loader />
    </>
  );
}
