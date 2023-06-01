import type {
  DefaultProps,
  KittenRadius,
  KittenSize,
  KittenVariant,
} from '@kitten-ui/styles';
import { createPolymorphicComponent } from '@kitten-ui/utils';
import React from 'react';
import { Box } from '../Box';
import { useInputStyles } from './Input.style';
import { InputWrapper } from './InputWrapper/InputWrapper';
import { useInputWrapperContext } from './InputWrapper/InputWrapper.context';

export interface InputSharedProps {
  icon?: React.ReactNode;

  iconWidth?: React.CSSProperties['width'];

  rightSection?: React.ReactNode;

  rightSectionWidth?: React.CSSProperties['width'];

  rightSectionProps?: Record<string, any>;

  rootProps?: Record<string, any>;

  required?: boolean;

  radius?: KittenRadius;

  variant?: KittenVariant<'default' | 'filled' | 'subtle'>;

  disabled?: boolean;

  size?: KittenSize;
}

export interface InputProps extends InputSharedProps, DefaultProps {
  error?: React.ReactNode;

  multiline?: boolean;

  pointer?: boolean;
}

export const Input = createPolymorphicComponent<
  'input',
  InputProps,
  { InputWrapper: typeof InputWrapper }
>((props, ref) => {
  const {
    className,
    children,
    style,
    rootProps,
    required,
    error,
    disabled,
    icon,
    size,
    rightSection,
    rightSectionProps,
    ...others
  } = props;
  const rootContext = useInputWrapperContext();
  const { describedBy } = rootContext;
  const classes = useInputStyles(props, rootContext);

  return (
    <Box ref={ref} className={classes.root} style={style} {...rootProps}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <Box
        as="input"
        {...others}
        ref={ref}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        disabled={disabled}
        data-disabled={disabled || undefined}
        data-with-icon={!!icon || undefined}
        data-invalid={!!error || undefined}
        className={classes.input}
      />
      {rightSection && (
        <div {...rightSectionProps} className={classes.rightSection}>
          {rightSection}
        </div>
      )}
    </Box>
  );
});

Input.InputWrapper = InputWrapper;

Input.displayName = 'Input';
Input.defaultProps = {
  size: 'sm',
  radius: 'sm',
  variant: 'default',
};
