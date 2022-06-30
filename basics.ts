// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Type inference
const str = "123";

// Union Type
let unionTest: string | number = "React";
unionTest = 12345;

// Type Aliases
type Person = {
  name: string;
  age: number;
};
const person: Person = {
  name: "Jack",
  age: 33,
};

// Functions & types
const add = (a: number, b: number) => {
  return a + b;
};

const printOutput = (value: any) => {
  console.log(value);
};

// Generics (array: any, value: any) 이면 두개가 다른 타입일 수도 있는데 T로 묶으면 두 개가 같은 타입으로 묶임 => 따라서 함수의 return 도 T[]로 나옴
const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('')

export {};
