import { autoDarkColor, css, Preset } from '@twind/core';
import { DefaultTheme, theme } from './theme';

export * from './colors';
export * from './theme';

export default function presetKitten(): Preset<DefaultTheme> {
  return {
    darkMode: 'class',
    darkColor: autoDarkColor,
    theme,
    rules: [
      ['cover', 'absolute top-0 left-0 right-0 bottom-0'],
      [
        'focus-styles',
        'focus:focus-visible:(outline outline-offset-2 outline-blue-500 z-[1] relative) focus:(outline-none) ',
      ],
      [
        'placeholder-styles',
        '[&::placeholder]:(opacity-100 select-none text-gray-500 dark:text-dark-300)',
      ],
    ],
    hash: (className, hash) => {
      if (/^[~@]\(/.test(className)) {
        return hash(className);
      }
      return className;
    },
  };
}
