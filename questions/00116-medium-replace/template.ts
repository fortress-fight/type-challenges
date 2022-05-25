type Replace<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer T}${From}${infer E}`
  ? `${T}${From extends '' ? '' : To}${E}`
  : S
