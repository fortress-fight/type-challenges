type TrimCharacter2 = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${TrimCharacter2}${infer T}`
  ? Trim<T>
  : S extends `${infer T}${TrimCharacter2}`
    ? Trim<T>
    : S
