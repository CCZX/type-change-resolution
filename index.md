## keyof 操作符
索引类型查询操作符，可以获取一个类型的所有公开属性，并将这些属性返回一个联合类型，比如：

```ts
interface User {
  name: string
  age: number
}

type TUser = keyof User // type TUser = 'name' | 'age'
```

keyof 在我们限制类型或者枚举属性时还是非常常见的，比如下面这个小例子：
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
```
复制代码这样当我们尝试获取不在目标对象上的属性值时，TS会为我们检查到这样简单的错误
`T[K]` 在TS里称作索引访问操作符（`indexed access operator`）。它可以为我们准确解析目标对象上的对应属性的正确类型。

在下面的介绍，我们可以继续看到 `keyof` 的应用。


## in 关键字

用于遍历目标类型的公开属性名，类似于 `for...in` 操作。一般用于联合类型或者枚举类型

**联合类型：**
```ts
type Union = 'age' | 'name' | 'id'

type UnionIn = {
  [key in Union]: string
}

// 相当于 ===>
type UnionIn = {
  age: string
  name: string
  id: string
}
```

**枚举类型：**
```ts
enum Letter {
  A,
  B,
  C,
}

type EnumIn = {
  [key in EnumIn]: string
}

// 相当于 ===> 
type EnumIn = {
  0: string
  1: string
  2: string
}
```

## extends

`extends` 一般有两种用法：

1. 类型继承

```ts
interface Animal {
  id: string
  type: string
}

interface Dog {
  name: string
}
```

2. 判断一个类型能不能赋值给另一个类型

```ts
// 如果 T 可以满足类型 Animal 则返回 Animal 类型，否则为 T 类型
type IsAnimal<T> = T extends Animal ? Animal : T;
```

## infer

`infer` 常用来做类型推测，一般出现在类型声明的右边，**并且只允许在条件类型的 extends 子语句中使用**。


## 元组相关操作

声明一个元组类型：

```ts
type tuple = ['t1', 't2', 't3']
```

获取元组长度：
```ts
type l = tuple['length']
```

获取元组每个值做为联合类型：
```ts
type t = tuple[number]
```

获取元组的第几个元素
```ts
type n = tuple[1]
```

## 文章

- https://github.com/ghaiklor/type-challenges-solutions
