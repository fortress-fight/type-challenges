type Flip<T> = {
  [P in keyof T as `${T[P] & (string | number | bigint | boolean | null | undefined)}`]: P
}
