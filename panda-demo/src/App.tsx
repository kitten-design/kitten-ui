import { Box } from '@kitten-ui/components';
import { css } from '@kitten-ui/styles/css';
import { button, ButtonVariant } from '@kitten-ui/styles/recipes';
import React from 'react';

type ButtonProps = ButtonVariant & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, size } = props;
  return (
    <button {...props} className={button({ size })}>
      <>{children}</>
    </button>
  );
};

export default function App() {
  return (
    <div className={css({ layerStyle: 'container', w: '1/3' })}>
      This is inside a container style
      <Button size="lg" visual={'funky'} shape={'square'}>
        Click me
      </Button>
      <Box color="red.600">123</Box>
    </div>
  );
}
