import type { DefaultProps, KittenSize } from 'kitten-styles';
import { createPolymorphicComponent } from 'kitten-utils';
import React, { Fragment } from 'react';
import { Box } from '../../Box';
import { InputWrapperProvider } from './InputWrapper.context';
import { useInputWrapperStyles } from './InputWrapper.style';
import { getInputOffsets } from './get-input-offsets';
import { Tooltip } from '../../Tooltip';

export interface InputWrapperProps extends DefaultProps {
  label?: React.ReactNode;

  description?: React.ReactNode;

  error?: React.ReactNode;

  required?: boolean;

  withAsterisk?: boolean;

  labelProps?: Record<string, any>;

  descriptionProps?: Record<string, any>;

  errorProps?: Record<string, any>;

  inputContainer?(children: React.ReactNode): React.ReactNode;

  inputWrapperOrder?: ('label' | 'input' | 'description' | 'error')[];

  variant?: string;

  /** Input that should be wrapped */
  children: React.ReactNode;

  /** htmlFor label prop */
  id?: string;

  /** Render label as label with htmlFor or as div */
  labelElement?: 'label' | 'div';

  /** Controls all elements font-size */
  size?: KittenSize;
}

export const InputWrapper = createPolymorphicComponent<
  'div',
  InputWrapperProps
>((props, ref) => {
  const {
    className,
    children,
    inputWrapperOrder,
    description,
    error,
    label,
    inputContainer,
    ...others
  } = props;

  const classes = useInputWrapperStyles(props);

  const _label = label;
  const _description = description;
  const _error = error;
  const _input = <Fragment key="input">{inputContainer!(children)}</Fragment>;

  const content = inputWrapperOrder!.map((part) => {
    switch (part) {
      case 'label':
        return _label;
      case 'input':
        return _input;
      case 'description':
        return _description;
      case 'error':
        return _error;
      default:
        return null;
    }
  });

  return (
    <InputWrapperProvider
      value={{
        describedBy: '',
        ...getInputOffsets(inputWrapperOrder!, {
          hasDescription: !!_description,
          hasError: !!_error,
        }),
      }}>
      <Box ref={ref} className={classes.root} {...others}>
        {content}
      </Box>
    </InputWrapperProvider>
  );
});

InputWrapper.displayName = 'InputWrapper';
InputWrapper.defaultProps = {
  labelElement: 'label',
  size: 'sm',
  inputContainer: (children) => children,
  inputWrapperOrder: ['label', 'description', 'input', 'error'],
};
