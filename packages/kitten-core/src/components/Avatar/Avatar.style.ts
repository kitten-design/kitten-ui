import type { RecipeVariantProps } from '@kitten-ui/style/css';
import { css, cva } from '@kitten-ui/style/css';
import type { HTMLStyledProps } from '@kitten-ui/style/jsx';
import { styled } from '@kitten-ui/style/jsx';

const colorPalette = 'gray';

const AvatarRootStyles = cva({
  base: {
    WebkitTapHighlightColor: 'transparent',
    position: 'relative',
    display: 'inline-block',
    userSelect: 'none',
    overflow: 'hidden',
    textDecoration: 'none',
    border: '1px solid',
    p: 0,
    w: 'var(--avatar-size)',
    h: 'var(--avatar-size)',
    minH: 'var(--avatar-size)',
  },
  variants: {
    variant: {
      default: {
        bg: 'Button.default.bg',
        color: 'Button.default.color',
        borderColor: 'Button.default.borderColor',
      },
      filled: {
        colorPalette,
        bg: 'colorPalette.ButtonFilled',

        color: 'white',
        border: 'none',
      },
      light: {
        colorPalette,
        bg: 'colorPalette.ButtonLight',
        color: 'colorPalette.ButtonLightColor',
        border: 'none',
      },
      outline: {
        colorPalette,
        bg: 'transparent',
        color: 'colorPalette.ButtonOutline',
        borderColor: 'colorPalette.ButtonOutline',
      },
      transparent: {
        colorPalette,
        bg: 'transparent',
        color: 'colorPalette.ButtonLightColor',
        border: 'none',
      },
      white: {
        colorPalette,
        bg: 'white',
        color: 'colorPalette.ButtonFilled',
        border: 'none',
      },
      gradient: {
        colorPalette,
        gradientFrom: 'colorPalette.400',
        gradientTo: 'colorPalette.800',
        bgGradient: 'to-br',
        color: 'white',
        border: 'none',
      },
    },
    size: {
      xs: { '--avatar-size': '1rem' },
      sm: { '--avatar-size': '1.625rem' },
      md: { '--avatar-size': '2.375rem' },
      lg: { '--avatar-size': '3.5rem' },
      xl: { '--avatar-size': '5.25rem' },
    },
  },
  defaultVariants: { size: 'md', variant: 'light' },
});

export type AvatarRootVariants = RecipeVariantProps<typeof AvatarRootStyles>;
export type AvatarRootProps = HTMLStyledProps<'div'>;
export const AvatarRoot = styled('div', AvatarRootStyles);
AvatarRoot.displayName = 'AvatarRoot';

export const AvatarImage = css({
  objectFit: 'cover',
  display: 'block',
  w: '100%',
  h: '100%',
});

export const AvatarPlaceholder = css({
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '100%',
  h: '100%',
  userSelect: 'none',
  borderRadius: 'inherit',
  fontSize: 'calc(var(--avatar-size) / 2.5)',
  color: 'inherit',
  bg: 'inherit',

  '& > [data-avatar-placeholder-icon]': {
    width: '70%;',
    height: '70%',
  },
});
