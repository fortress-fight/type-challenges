type ObjectEntries<T, K = keyof T, O = Required<T>> = K extends keyof O
  ? [K, O[K] extends [never] ? undefined : O[K]]
  : undefined
