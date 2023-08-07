import '../global.css';

import { Button } from '@kitten-ui/core';
import { css } from '@kitten-ui/styles/css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <button className={css({ bg: 'blue.600!' })}>123123</button>
      <Button bg="blue.600!" loading>
        按钮
      </Button>
      <Component {...pageProps} />
    </>
  );
}
