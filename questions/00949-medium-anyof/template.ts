type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer O]
  ? F extends 0 | '' | false | [] | Record<string, never>
    ? AnyOf<O>
    : true
  : false
