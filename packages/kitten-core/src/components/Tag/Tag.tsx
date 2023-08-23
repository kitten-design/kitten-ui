import { styled } from '@kitten-ui/styles/jsx';
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
  const { children, leftSection, rightSection, ...others } = props;

  return (
    <TagRoot data-tag ref={ref} {...others}>
      {leftSection && <styled.span mr="0.3125rem">{leftSection}</styled.span>}
      <styled.span
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap">
        {children}
      </styled.span>
      {rightSection && <styled.span ml="0.3125rem">{rightSection}</styled.span>}
    </TagRoot>
  );
});
Tag.displayName = 'Tag';
