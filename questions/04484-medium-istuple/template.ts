type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly [infer _F]
    ? true
    : T extends []
      ? true
      : false
