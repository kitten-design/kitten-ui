import React from 'react';

import { cpc } from '../../utils';
import type { TextRootProps, TextRootVariants } from './Text.style';
import { TextRoot } from './Text.style';

export interface Props extends TextRootProps {
  inline?: boolean;
}

export type TextProps = Props & TextRootVariants;

export const Text = cpc<'p', TextProps>((props, ref) => {
  const { inline, ...others } = props;
  return (
    <TextRoot
      data-text
      ref={ref}
      {...{ as: inline ? 'span' : 'p' }}
      {...others}
    />
  );
});
Text.displayName = 'Text';
