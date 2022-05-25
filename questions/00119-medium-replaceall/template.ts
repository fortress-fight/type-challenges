type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer F}${From}${infer E}`
  ? From extends ''
    ? S
    : `${ReplaceAll<F, From, To>}${To}${ReplaceAll<E, From, To>}`
  : S
