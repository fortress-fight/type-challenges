type TrimCharacter3 = ' ' | '\n' | '\t'

type TrimRight<
  S extends string,
  B extends string = '',
  R extends string = '',
> = S extends `${infer F}${infer O}`
  ? F extends TrimCharacter3
    ? TrimRight<O, `${B}${F}`, `${R}`>
    : TrimRight<O, `${B}${F}`, `${B}${F}`>
  : R
