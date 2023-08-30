import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { cva } from '@kitten-ui/style/css';
import { type HTMLStyledProps, styled } from '@kitten-ui/style/jsx';

const AvatarGroupRootStyles = cva({
  base: {
    display: 'flex',
    pl: 'var(--ag-spacing)',
    '& > [data-avatar-with-img=false]': {
      ml: 'calc(var(--ag-spacing) * -1)',
      border: '0.125rem solid',
      borderColor: 'Body.bg',
      bg: 'Body.bg',
    },
    '& > [data-avatar-with-img=true]': {
      ml: 'calc(var(--ag-spacing) * -1)',
    },
  },
});

export type AvatarGroupRootVariants = RecipeVariantProps<
  typeof AvatarGroupRootStyles
>;
export type AvatarGroupRootProps = HTMLStyledProps<'div'>;

export const AvatarGroupRoot = styled('div', AvatarGroupRootStyles);
AvatarGroupRoot.displayName = 'AvatarGroupRoot';
