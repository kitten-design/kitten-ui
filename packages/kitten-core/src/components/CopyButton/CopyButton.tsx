import { useClipboard } from '@kitten-ui/hooks';
import type { FC, ReactNode } from 'react';
import React from 'react';

export interface CopyButtonProps {
  children(payload: { copied: boolean; copy(): void }): ReactNode;

  value: string;

  timeout?: number;
}

export const CopyButton: FC<CopyButtonProps> = (props) => {
  const { children, timeout, value, ...others } = props;
  const clipboard = useClipboard({ timeout });
  const copy = () => clipboard.copy(value);
  return <>{children({ copy, copied: clipboard.copied, ...others })}</>;
};

CopyButton.displayName = 'CopyButton';
CopyButton.defaultProps = {
  timeout: 1000,
};
