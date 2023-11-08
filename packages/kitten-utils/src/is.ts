export const isArray = (v: unknown): v is Array<any> => Array.isArray(v);

export const isString = (v: unknown): v is string => typeof v === 'string';

export const isObject = (v: unknown): v is Record<any, any> =>
  !!v && typeof v === 'object' && !isArray(v);

export const isFunction = (v: unknown): v is Function => typeof v === 'function';

export const isPrimitive = (arg: unknown): arg is string | number | bigint | boolean | symbol => {
  const type = typeof arg;
  return arg !== undefined && type !== 'object' && type !== 'function';
};

export const isSymbol = (v: unknown): v is symbol => typeof v === 'symbol';

export const isBoolean = (v: unknown): v is boolean => typeof v === 'boolean';

export const isPromise = <T>(v: unknown): v is Promise<T> => v instanceof Promise;

export const isEmpty = (v: object): boolean => {
  if (!v) return false;
  if (isArray(v)) return v.length === 0;
  for (const key in v) {
    if (Object.prototype.hasOwnProperty.call(v, key)) {
      return false;
    }
  }
  return true;
};
