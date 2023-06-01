import { isClient } from 'kitten-utils';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicEffect = isClient ? useLayoutEffect : useEffect;
