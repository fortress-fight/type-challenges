type NumberRange<L, H, A extends any[] = [], R = ''> = A['length'] extends L
  ? NumberRange<L, H, [...A, 1], A['length']>
  : A['length'] extends H
  ? R | A['length']
  : NumberRange<L, H, [...A, 1], R | A['length']>
