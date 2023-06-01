import { KittenSize } from 'kitten-styles';
import React, { createContext, useContext } from 'react';

interface ContextType {
  spacing: KittenSize;
}

const AvatarGroupContext = createContext<ContextType | null>(null);

interface AvatarGroupProviderProps extends ContextType {
  children: React.ReactNode;
}

export function AvatarGroupProvider({
  spacing,
  children,
}: AvatarGroupProviderProps) {
  return (
    <AvatarGroupContext.Provider value={{ spacing }}>
      {children}
    </AvatarGroupContext.Provider>
  );
}

export function useAvatarGroupContext() {
  const ctx = useContext(AvatarGroupContext);

  if (ctx) {
    return { ...ctx, withinGroup: true };
  }

  return { spacing: '0', withinGroup: false };
}
