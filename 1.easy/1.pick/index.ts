export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface User {
  name: string
  age: number
}

type U = MyPick<User, 'age'>
