import { useClipboard } from 'kitten-hooks';
import React from 'react';

export interface CopyButtonProps {
  children(payload: { copied: boolean; copy(): void }): React.ReactNode;
  value: string;
  timeout?: number;
}

export const CopyButton: React.FC<CopyButtonProps> = (props) => {
  const { children, timeout, value, ...others } = props;
  const clipboard = useClipboard({ timeout });
  const copy = () => clipboard.copy(value);
  return (
    <React.Fragment>
      {children({ copy, copied: clipboard.copied, ...others })}
    </React.Fragment>
  );
};

CopyButton.displayName = 'CopyButton';
CopyButton.defaultProps = { timeout: 1000 };
