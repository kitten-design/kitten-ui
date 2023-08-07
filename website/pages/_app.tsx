import './globals.css';

import { Button } from '@kitten-ui/core';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Button>按钮</Button>
      <Component {...pageProps} />
    </>
  );
}
