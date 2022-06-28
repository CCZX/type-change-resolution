type LookUp<U, T> = U extends { type: T } ? U : never;

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`



type Test<U, T> = U extends T ? U : never;

type T1 = Test<1 | 2, number>;
type T2 = Test<1 | '2', string>;
