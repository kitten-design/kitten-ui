import type { GlobalStyleObject } from '@pandacss/types';

const resetCss: GlobalStyleObject = {
  'html,body': { height: '100%' },
  '*,*::before,*::after': { boxSizing: 'border-box' },
  'input,button,textarea,select': { font: 'inherit' },
  'button,select': { textTransform: 'none' },
};

export const globalCss: GlobalStyleObject = {
  ...resetCss,
  '*': {
    transition: 'color 0.07s ease,background-color 0.07s ease',
  },
  body: {
    m: 0,
    fontSize: 'md',
    lineHeight: 'md',
    color: 'Body.color',
    bg: 'Body.bg',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
};
