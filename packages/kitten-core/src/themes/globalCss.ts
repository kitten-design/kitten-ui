import type { GlobalStyleObject } from '@pandacss/types';

const resetCss: GlobalStyleObject = {
  'html,body': { height: '100%' },
  '*,*::before,*::after': { boxSizing: 'border-box' },
  'input,button,textarea,select': { font: 'inherit' },
  'button,select': { textTransform: 'none' },
};

export const globalCss: GlobalStyleObject = {
  ...resetCss,
  '*': { transition: 'background-color 0.1s ease-in-out' },
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
