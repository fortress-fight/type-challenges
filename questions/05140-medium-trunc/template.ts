type Trunc<
  S extends string | number,
  R extends string = '',
> = `${S}` extends `${infer F}${infer O}`
  ? F extends '.'
    ? R
    : Trunc<O, `${R}${F}`>
  : R
