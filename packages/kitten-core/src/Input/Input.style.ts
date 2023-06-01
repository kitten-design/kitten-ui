import {
  KittenRadius,
  KittenSize,
  KittenVariant,
  attachClassName,
  css,
  cx,
  getVariant,
  rem,
} from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { InputProps } from './Input';
import { InputRootContextValue } from './InputWrapper/InputWrapper.context';

export const sizes: Record<KittenSize, number> = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60,
};

const INPUT_VARIANTS = ['default', 'filled', 'subtle'];

function getVariantStyles({
  variant,
  size,
  radius,
  withRightSection,
  rightSectionWidth,
}: {
  variant: KittenVariant<'default' | 'filled' | 'subtle'>;
  size: KittenSize;
  radius: KittenRadius;
  withRightSection: boolean;
  rightSectionWidth: string;
}) {
  if (!INPUT_VARIANTS.includes(variant)) {
    return '';
  }
  const _size = rem(sizes[size!]);
  const _size_3 = rem(sizes[size!] / 3);

  const outline = `[&:focus]:(outline-none border-primary-600 dark:border-primary-800) 
  [&:focus-within]:(outline-none border-primary-600 dark:border-primary-800)`;

  if (variant === 'default') {
    return `border border-solid border-gray-400 dark:border-dark-400 bg-white 
    dark:bg-dark-600 ${outline} rounded-${radius} min-h-[${_size}]
    pl-[${_size_3}] ${
      withRightSection
        ? `pr-[${rightSectionWidth || _size}]`
        : `pr-[${_size_3}]`
    }
    `;
  }

  if (variant === 'filled') {
    return `border border-solid border-transparent 
    bg-gray-100 dark:bg-dark-500 ${outline} rounded-${radius} min-h-[${_size}] 
    pl-[${_size_3}] ${
      withRightSection
        ? `pr-[${rightSectionWidth || _size}]`
        : `pr-[${_size_3}]`
    }
    `;
  }

  const subtle = css`
    &:focus,
    &:focus-within {
      outline: none;
      border-color: transparent;
    }

    &:disabled &:focus,
    &:focus-within {
      outline: none;
      border-color: transparent;
    }
  `;
  return `border-0 bg-transparent min-h-[${rem(28)}] outline-none ${subtle} 
  ${withRightSection && `pr-[${rightSectionWidth || _size}]`}
  `;
}

export function useInputStyles(
  props: PolymorphicComponentProps<'input', InputProps>,
  rootContext: InputRootContextValue,
) {
  const {
    className,
    multiline,
    variant,
    size,
    pointer,
    radius,
    rightSection,
    rightSectionWidth,
    iconWidth,
    error,
  } = props;
  const { offsetBottom, offsetTop } = rootContext;

  const { background: invalidColor, dark } = getVariant({
    variant: 'filled',
    color: 'red',
  });
  const darkInvalidColor = dark?.background;

  const classes = {
    root: cx(
      'relative',
      offsetTop && `mt-xs/2`,
      offsetBottom && `mb-xs/2`,
      css`
        &:has(input:disabled) {
          & .kitten-input-rightSection {
            display: none;
          }
        }
      `,
      className,
    ),
    input: cx(
      'font-sans appearance-none resize-none box-border w-full block text-left',
      'text-black dark:text-dark-50',
      'placeholder-styles',
      multiline ? variant !== 'subtle' && 'h-auto' : `h-[${rem(sizes[size!])}]`,
      multiline ? 'leading-[1.55]' : `leading-[${rem(sizes[size!] - 2)}]`,
      `text-${size}`,
      pointer && 'cursor-pointer',
      getVariantStyles({
        variant: variant!,
        size: size!,
        radius: radius!,
        withRightSection: !!rightSection,
        rightSectionWidth: rem(rightSectionWidth),
      }),
      `[&:disabled,&[data-disabled]]:(bg-gray-100 dark:bg-dark-600 opacity-60 
        placeholder-dark-200 dark:placeholder-gray-600 cursor-not-allowed)`,
      `[&[data-invalid]]:(text-${invalidColor} border-${invalidColor} placeholder-${invalidColor} 
        dark:(text-${darkInvalidColor} border-${darkInvalidColor} placeholder-${darkInvalidColor}))`,
      `[&[data-with-icon]]:(pl-[${rem(iconWidth || sizes[size!])}])`,
      css`
        & {
          -webkit-tap-highlight-color: transparent;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button,
        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
          appearance: none;
        }
        &[type='number'] {
          appearance: textfield;
          -moz-appearance: textfield;
        }
      `,
    ),

    icon: cx(
      'pointer-events-none absolute z-[1] top-0 left-0 bottom-0',
      'flex items-center justify-center overflow-hidden',
      `w-[${rem(iconWidth || sizes[size!])}] text-${size} p-1`,
      'text-gray-500 dark:text-dark-200',
      error && 'text-red-700 dark:text-red-600',
    ),

    rightSection: cx(
      'absolute top-0 right-0 bottom-0',
      'flex items-center justify-center overflow-hidden',
      `w-[${rem(rightSectionWidth || sizes[size!])}]`,
      'text-gray-500 dark:text-dark-200',
      error && 'text-red-700 dark:text-red-600',
    ),
  };

  return attachClassName('input', classes);
}
