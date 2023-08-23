import { cpc } from '@kitten-ui/utils';
import type { ReactNode } from 'react';
import React from 'react';

import type { TagRootProps, TagRootVariants } from './Tag.style';
import { TagRoot } from './Tag.style';

export interface Props extends TagRootProps {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

export type TagProps = Props & TagRootVariants;

export const Tag = cpc<'div', TagProps>((props, ref) => {
  return <TagRoot data-tag ref={ref} {...props} />;
});
Tag.displayName = 'Tag';
