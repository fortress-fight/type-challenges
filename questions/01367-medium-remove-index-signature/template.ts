type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer K}` ? K : never]: T[P]
}
