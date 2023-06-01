/**
 * Append default class name
 */
export function attachClassName<T extends Record<string, string>>(
  component: string,
  classes: T,
): T {
  let result: any = {};
  for (let key in classes) {
    result[key] = `kitten-${component}-${key} ${classes[key]}`;
  }
  return result;
}
