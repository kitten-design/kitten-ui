/** Empty type */
export type Empty = Record<string, any>;

/** Merge properties */
export type Merge<T, P> = P & Omit<T, keyof P>;
