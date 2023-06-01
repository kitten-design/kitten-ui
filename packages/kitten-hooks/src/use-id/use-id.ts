import React, { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export function useId(staticId?: string) {
  const reactId = React?.useId() || '';
  const [uuid, setUuid] = useState(reactId);

  useIsomorphicEffect(() => {
    setUuid(`kitten-${Math.random().toString(36).slice(2, 11)}`);
  }, []);

  if (typeof staticId === 'string') {
    return staticId;
  }

  if (typeof window === 'undefined') {
    return `kitten-${reactId.replace(/:/g, '')}`;
  }

  return uuid;
}
