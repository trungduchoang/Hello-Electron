/**
 * Reveal Object properties type recursively
 * (Support serializable data only)
 */
type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T;

/**
 * Reveal Object properties type only first nested
 * (Support unserializable data)
 */
type ShallowExpand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

/**
 * Any Object - extends type any
 */
interface obj<PROPERTY_TYPE = any> {
  [key: string]: PROPERTY_TYPE;
}
