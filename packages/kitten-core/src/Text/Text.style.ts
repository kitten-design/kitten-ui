import { attachClassName, css, getColor, getVariant, cx } from 'kitten-styles';
import { PolymorphicComponentProps } from 'kitten-utils';
import { TextProps } from './Text';

const TEXT_VARIANT = ['gradient'];

export function useTextStyles(
  props: PolymorphicComponentProps<'div', TextProps>,
) {
  const {
    lineClamp,
    truncate,
    inherit,
    color,
    inline,
    size,
    textDecoration,
    weight,
    transform,
    align,
    italic,
    variant,
    gradient,
    className,
  } = props;

  const {
    deg,
    from,
    to,
    color: _color,
  } = getVariant({ variant: 'gradient', gradient, variants: TEXT_VARIANT });

  const classes = {
    root: cx(
      'focus-styles',
      getLineClamp(lineClamp),
      `text-${getColor({ color, shade: 600 })} dark:text-${getColor({
        color,
        shade: color === 'dark' ? 50 : 300,
      })}`,
      truncate && 'truncate',
      italic && 'italic',
      transform && transform,
      textDecoration && textDecoration,
      !inherit &&
        cx(`font-sans`, size && `text-${size}`, weight && `font-${weight}`),
      align && `text-${align}`,
      inline && 'leading-none',
      variant === 'gradient' &&
        cx(
          `bg-gradient-to-${deg} ${from} ${to} dark:(${from} ${to}) `,
          css`
            & {
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `,
        ),
      className,
    ),
  };

  return attachClassName('text', classes);
}

function getLineClamp(lineClamp?: number) {
  if (typeof lineClamp === 'number' && lineClamp >= 0) {
    return cx(
      `overflow-hidden text-ellipsis`,
      css`
        & {
          display: -webkit-box;
          -webkit-line-clamp: ${lineClamp};
          -webkit-box-orient: vertical;
        }
      `,
    );
  }

  return null;
}
