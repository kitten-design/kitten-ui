import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export interface ImageState {
  loaded: boolean;
  error: boolean;
}

export function useImage(src?: string | null): ImageState {
  const [imageState, setImageState] = useState<ImageState>({
    loaded: false,
    error: false,
  });

  useIsomorphicEffect(() => {
    if (!src) {
      setImageState({ loaded: false, error: true });
      return;
    }
    const img = new Image();
    img.onload = () => {
      setImageState({ loaded: true, error: false });
    };
    img.onerror = () => {
      setImageState({ loaded: false, error: true });
    };
    img.src = src;
  }, [src]);

  return imageState;
}
