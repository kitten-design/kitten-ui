import React, {
  Children,
  ComponentProps,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export function getChildrenByType<T extends FC>(
  children: ReactNode,
  Component: T,
) {
  type C = ReactElement<ComponentProps<T>, T>;

  const result =
    Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return null;
      }

      if (typeof child.type === 'string') {
        return null;
      }

      if ((child as C).type.displayName === Component.displayName) {
        return child;
      }
    })?.filter(Boolean) || [];

  return result as C[];
}

export function isElement(value: any): value is React.ReactElement {
  if (Array.isArray(value) || value === null) {
    return false;
  }

  if (typeof value === 'object') {
    if (value.type === React.Fragment) {
      return false;
    }

    return true;
  }

  return false;
}
