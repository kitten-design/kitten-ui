/**
 * Unit Converter Factory
 */
function createConverter(units: string) {
  return (px: unknown) => {
    if (typeof px === 'number') {
      return `${px / 16}${units}`;
    }

    if (typeof px === 'string') {
      const replaced = px.replace('px', '');
      if (!Number.isNaN(Number(replaced))) {
        return `${Number(replaced) / 16}${units}`;
      }
    }

    return px as string;
  };
}

/**
 * Convert to rem
 */
export const rem = createConverter('rem');

/**
 * Convert to em
 */
export const em = createConverter('em');
