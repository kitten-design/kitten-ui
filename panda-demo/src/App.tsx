import { Box } from '@kitten-ui/components';
import { css } from '@kitten-ui/styles/css';
import React from 'react';

export default function App() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Box
      ref={ref}
      className={css({ textStyle: '3xl' })}
      color="red.500"
      m="16"
      w="100px"
      h="100px"
      bg="red.100"
      fontFamily="mono"
      animation="bounce">
      123
    </Box>
  );
}
