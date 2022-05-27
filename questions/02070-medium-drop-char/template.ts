type DropChar<S, C, R extends string = ''> = S extends `${infer F}${infer O}`
  ? F extends C
    ? DropChar<O, C, `${R}`>
    : DropChar<O, C, `${R}${F}`>
  : R
