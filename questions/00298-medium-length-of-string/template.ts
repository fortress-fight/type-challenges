type LengthOfString<
  S extends string,
  U extends any[] = [],
> = S extends `${infer F}${infer O}`
  ? LengthOfString<O, [...U, F]>
  : U['length']
