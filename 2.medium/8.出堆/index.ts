type Pop<T extends readonly any[]> = T extends [...infer R, infer L] ? R : never;

type Shift<T extends readonly any[]> = T extends [infer F, ...infer R] ? R : never

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type re3 = Shift<arr1> // expected to be ['b', 'c', 'd']
type re4 = Shift<arr2> // expected to be [2, 1]
