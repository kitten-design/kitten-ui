export type Empty = Record<string, any>;

export type Merge<T, P> = P & Omit<T, keyof P>;
