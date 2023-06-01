import { defineConfig, install, setup } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';
import presetKitten, { green, red } from './preset';

export {
  animation,
  apply,
  css,
  cx,
  install,
  keyframes,
  shortcut,
  tw,
  tx,
} from '@twind/core';

export const config = {
  presets: [presetTailwind(), presetKitten()],
};

install(defineConfig(config));

export const update = () => {
  setup(
    defineConfig({
      ...config,
      theme: {
        extend: {
          colors: {
            primary: Math.random() > 0.5 ? green : red,
          },
        },
      },
    }),
  );
};
