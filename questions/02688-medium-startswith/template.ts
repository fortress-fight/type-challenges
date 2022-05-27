type StartsWith<
  T extends string,
  U extends string,
  S extends string = '',
> = T extends `${infer F}${infer O}`
  ? U extends S
    ? true
    : StartsWith<O, U, `${S}${F}`>
  : false
