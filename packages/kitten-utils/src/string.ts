export function getFirstChar(str: string = ''): string {
  if (str.length === 0) {
    return '';
  }
  const firstCharCode = str.charCodeAt(0);
  if (firstCharCode < 55296 || firstCharCode > 57343) {
    // 不是表情符号
    return str.charAt(0);
  } else if (
    firstCharCode >= 55296 &&
    firstCharCode <= 56319 &&
    str.length > 1
  ) {
    // 是高位代理项，且后面还有低位代理项
    const secondCharCode = str.charCodeAt(1);
    if (secondCharCode >= 56320 && secondCharCode <= 57343) {
      return str.substring(0, 2);
    }
  }
  // 是表情符号但无法完全解析，则返回第一个字符
  return str.charAt(0);
}
