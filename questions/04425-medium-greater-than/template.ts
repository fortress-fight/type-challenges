type GreaterThan<
  T extends number,
  U extends number,
  C extends any[] = [],
> = T extends U
  ? false
  : T extends C['length']
    ? false
    : U extends C['length']
      ? true
      : GreaterThan<T, U, [...C, 1]>
