type StringToUnion<T extends string> = T extends `${infer S}${infer O}`
  ? S | StringToUnion<O>
  : never
