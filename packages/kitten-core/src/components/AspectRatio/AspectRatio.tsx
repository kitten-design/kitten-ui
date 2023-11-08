import { cpc } from '@kitten-ui/utils';
import React from 'react';

import type { AspectRatioRootProps, AspectRatioRootVariants } from './AspectRatio.style';
import { AspectRatioRoot } from './AspectRatio.style';

export interface Props extends AspectRatioRootProps {
  /** Aspect ratio, e.g. `16 / 9`, `4 / 3`, `1920 / 1080`, `1` by default */
  ratio?: number;
}

export type AspectRatioProps = Props & AspectRatioRootVariants;

export const AspectRatio = cpc<'div', AspectRatioProps>((props, ref) => {
  const { ratio, style } = props;
  return (
    <AspectRatioRoot
      data-aspectRatio
      ref={ref}
      style={{ ...style, '--ar-ratio': `${ratio}` }}
      {...props}
    />
  );
});
AspectRatio.displayName = 'AspectRatio';
