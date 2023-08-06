import '../styles.css';

import { Button } from '@kitten-ui/core';
import { css } from '@kitten-ui/styles/css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={css({ bg: 'red.600' })}>123123</div>
      <Button>按钮</Button>
      <Component {...pageProps} />
    </>
  );
}
