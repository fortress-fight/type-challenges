type Join<
  T extends any[],
  U extends string | number,
  R extends string = '',
> = T extends [infer F, ...infer O]
  ? R extends ''
    ? Join<O, U, `${R}${F & string}`>
    : Join<O, U, `${R}${U}${F & string}`>
  : R
