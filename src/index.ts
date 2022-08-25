let bool: boolean = false;

// bool = "Masai";
// if i try to store a str inside a var that can only accept booleans than it will give me error even before compiling

// type script helps us to write an structured code that follow certain rules
console.log(bool);

// NOTE -> typeScript can understand Js but Js may or may not understand typeScript code

// if i run this .ts file then it will give me error but if i run build>index.js then it will print masai --> by using node index.js

bool = true;

// in typescript the format of writing is
// var:type = value

// npm run build

// Number
let amount: number = 100;

// String
let firstName: string = "Masai";
let lastName: string = "School";
let age: number = 3;
let fullName = `${firstName} ${lastName} ${age}`;
// fullName will inference check for type
// if both are str then it will be string
// if one is str and other is num then also it will be str -> BECAUSE of the template literal

// Array
let arr1: number[] = [1, 2, 3, 4];
let arr2: string[] = ["Masai", "School"];
let arr3: Array<number> = [5, 6, 7, 8];

// Objects
// to create an obj using ts we use the concept of interface which describes the shape of an obj -> since everyting in js is obj so we use interface to det how it should look

// interface person {
//   name: string;
//   age: number;
// }

// instead of interface we can also use

// Difference between interface and type
// interface is only limited to objects (cannot use =) but type can be used for both objects and primitives (we can use =)

// Primitive types in ts -> num, str, boolean, null, undefied, symbol, and big-int

// Type Alias
type person = {
  name: string;
  age: number;
  workingdays?: 5; //optional key -> if i dont use ? then person1 will give error
};

let person1: person = {
  name: "Masai",
  age: 3,
};

// TypeScripts helps in correcting the code while writting so that later we dont get any type error while running the code

let personArr: person[] = [{ name: "Masai", age: 3 }];

// now we will create a function to print objects only if it have all the prop that is required by comparing it with person type and also this function is not returning anything thats why we can use void check.. taki badme koi galti se return nhi likh de usme
const printPerson = ({ name, age }: person): void => {
  console.log(`${name} ${age} "printed using printPerson Function"`);
};

printPerson(person1);
// and if there is void means it wont return anything means we cannot use chaining here like .length or Math.abs,.floor

// inside personArr we can only use name and age as key -> person[] => means create an array with objects that matched the prop defined in person

// Tuples -> array
// tuples is used to declare multiple variables inside an array.. so that we can access it using indexes

// let a: string = "Masai";
// let b: string = "School";

// let tuple: [string, string];
// tuple = ["Masai", "School"];
let tuple: [string, string, number] = ["Masai", "School", 3];

// Enums -> Group of named constants
const GET_DATA_LOADING = "GET_DATA_LOADING";

// emuns are used to declare variables so that we can access them using index (if no value is defined to them) , and if value is defined then we can access these values using key because earlier the var are present as value to index(key) and as soon as we assign any val then the var becomes key and assigned val becomes val

enum Color {
  RED,
  GREEN,
  BLUE = "blue",
}
console.log(Color);
// { '0': 'RED', '1': 'GREEN', '2': 'BLUE', RED: 0, GREEN: 1, BLUE: 2 }
// enum also provide index as the default value of its poperties.. and we can also assign values of its own
// { '0': 'RED', '1': 'GREEN', RED: 0, GREEN: 1, BLUE: 'blue' }

// if we define value to RED then we have to define values to all next

// there are 2 ways to access data in enums
console.log(Color.GREEN); // 1
console.log(Color[1]); // GREEN

// Other types

let u: undefined;
let n: null;
let a: any;

// functions

// if we want that the output of this sum should also be a number then we can also define it sum():number

function sum(a: number, b: number = 2): number {
  return a + b + 2;
  //   return a + b + "2";
}

// sum("2", "3");
sum(2, 3);

// Union (|) ->
// to use different data types simultanelosly -> num and str together

let union: (number | string)[];

union = [9, "Masai", "cannot write any boolean here"];

type softwareEngineer = {
  skill: string;
};

// Intersection (&)
// by name it feels that it takes only the common props but here it combines all the props of different type Alias

let IntersectionEx: person & softwareEngineer = {
  age: 3,
  name: "masai",
  skill: "coding",
};

// diff between union and intersection
// in union -> given typeAlias main se jo prop rakhna cahte ho rakh lo, agar koi prop nahi cahieye to use rehne do

// intersection -> jitne bhi typeAlias likhe hai unki saari prop use karni hi padegi-> agar ek bhi chod di to error milega-> but agar phir bhi koi nahi rakhna hai to us type Alias ke andar us prop ke sath ? lagado

// API
// similarly while calling api we can predefine what kind of response we are looking for

type resObj = {
  postId: number;
  id: number;
  title: string;
};

let response: resObj[];

// axios("URL").then((res)=>{
//     res.data.forEach(item:response) => {
//         let length = item.name.length
//     }
// })
