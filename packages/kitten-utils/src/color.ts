import Chroma from 'chroma-js';

export function toRgba(chromaColor: Chroma.Color) {
  const rgbaArray = chromaColor.rgba();
  return `rgba(${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, ${rgbaArray[3]})`;
}

export const Color = Chroma;
