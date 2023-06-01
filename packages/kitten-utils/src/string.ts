/**
 * Get the first character of a string.
 */
export function getFirstChar(str: string = ''): string {
  if (str.length === 0) {
    return '';
  }
  const firstCharCode = str.charCodeAt(0);
  if (firstCharCode < 55296 || firstCharCode > 57343) {
    // Not an emoji or surrogate pair
    return str.charAt(0);
  } else if (
    firstCharCode >= 55296 &&
    firstCharCode <= 56319 &&
    str.length > 1
  ) {
    // High surrogate with subsequent low surrogate
    const secondCharCode = str.charCodeAt(1);
    if (secondCharCode >= 56320 && secondCharCode <= 57343) {
      return str.substring(0, 2);
    }
  }

  // Emoji or surrogate pair that cannot be fully resolved, return the first character
  return str.charAt(0);
}
