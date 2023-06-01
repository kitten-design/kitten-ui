import { isClient } from '@kitten-ui/utils';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicEffect = isClient ? useLayoutEffect : useEffect;
