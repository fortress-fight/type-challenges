type MyCapitalize<S extends string> = S extends `${infer T}${infer K}`
  ? `${Uppercase<T>}${K}`
  : ''
