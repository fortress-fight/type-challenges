type EndsWith<
  T extends string,
  U extends string,
> = T extends `${infer _F}${infer O}`
  ? U extends T
    ? true
    : EndsWith<O, U>
  : false
