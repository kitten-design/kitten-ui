import { attachClassName, css, cx, rem } from '@kitten-ui/styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { ButtonGroupProps } from './ButtonGroup';

export function useButtonGroupStyles(
  props: PolymorphicComponentProps<'div', ButtonGroupProps>,
) {
  const { className, vertical, buttonBorderWidth = 1 } = props;

  const classes = {
    root: cx(
      'inline-flex',
      `${vertical ? 'flex-col' : 'flex-row'}`,

      vertical
        ? css`
            & [data-button]:first-of-type:not(:last-of-type) {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
              border-bottom-width: ${rem(buttonBorderWidth / 2)};
            }

            & [data-button]:last-of-type:not(:first-of-type) {
              border-top-right-radius: 0;
              border-top-left-radius: 0;
              border-top-width: ${rem(buttonBorderWidth / 2)};
            }

            & [data-button]:not(:last-of-type):not(:first-of-type) {
              border-radius: 0;
              border-top-width: ${rem(buttonBorderWidth / 2)};
              border-bottom-width: ${rem(buttonBorderWidth / 2)};
            }
          `
        : css`
            & [data-button]:first-of-type:not(:last-of-type) {
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
              border-right-width: ${rem(buttonBorderWidth / 2)};
            }

            & [data-button]:last-of-type:not(:first-of-type) {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              border-left-width: ${rem(buttonBorderWidth / 2)};
            }

            & [data-button]:not(:last-of-type):not(:first-of-type) {
              border-radius: 0;
              border-right-width: ${rem(buttonBorderWidth / 2)};
              border-left-width: ${rem(buttonBorderWidth / 2)};
            }
          `,
      className,
    ),
  };

  return attachClassName('buttonGroup', classes);
}
