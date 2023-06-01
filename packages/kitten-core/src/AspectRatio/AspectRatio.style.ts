import { apply, attachClassName, css, cx } from 'kitten-styles';
import { PolymorphicComponentProps } from '@kitten-ui/utils';
import { AspectRatioProps } from './AspectRatio';

export function useAspectRatioStyles(
  props: PolymorphicComponentProps<'div', AspectRatioProps>,
) {
  const { className, ratio } = props;

  const classes = {
    root: cx(
      'relative',
      apply('max-w-full'),
      css`
        &::before {
          content: '';
          height: 0;
          display: block;
          padding-bottom: ${(1 / ratio) * 100}%;
        }

        &::after {
          content: '';
          display: 'table';
          clear: 'both';
        }

        & > *:not(style) {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        & > img,
        & > video {
          object-fit: cover;
        }
      `,
      className,
    ),
  };

  return attachClassName('aspectRatio', classes);
}
