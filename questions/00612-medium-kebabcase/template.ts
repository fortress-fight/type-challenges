type KebabCase<
  S extends string,
  B extends string = '',
> = S extends `${infer F}${infer O}`
  ? F extends Uppercase<F>
    ? F extends Lowercase<F>
      ? KebabCase<O, `${B}${F}`>
      : KebabCase<O, `${B}${B extends '' ? '' : '-'}${Lowercase<F>}`>
    : KebabCase<O, `${B}${F}`>
  : B
