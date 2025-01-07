//let,const
// console.log(a)//undefined
// let a:number;
// // const a:string;//error should be initialsed

//block scoped


// if(true)
// {
//     let ab:number=10;
//     console.log(ab)//10
// }
// console.log(ab)//Cannot find name 'ab'because block scope
  

//objects
// let obj:{myname1:string,age:number}=
// {
//     myname1:"abc",
//     age:22,
// }
// console.log(obj)//{ name: 'abc',age:22 }

// let obj: Object;

// obj = { name: "gokul",age:19 };

// console.log((obj as {name:string,age:number})); //{ name: 'gokul',age:19 }


//for-of loop
//let arr:{first:number,second:number,third:number}={first:1,second:2,third:3}//Error:is not an array type or a string type.
// const arr: number[] = [1, 2, 3];//for-of works for arr 
// let arr:string="iVoyant"//i V o y a n t
// for (const num of arr) {
//   console.log(num);//1,2,3
// }


//arrow functions
// const func=(para1:number):number=>
// {
//     return para1*para1
// }
// console.log(func(5))
    // const sum = (a: number, b: number): number => a + b;
    // console.log(sum(13,24))//37


// this :its value is based on where it is called
// const func1=()=>
// {
//     let obj:{color:string,func():void}={
//             color:"red",
//             // func(){
//             //     console.log(this.color); // red
//             // }
//             func:()=>{
//                 console.log(this.color); // undefined/window
//             }
            
//     }
//     return obj
// }

// func1().func();

//import,export
// const project_title=(): string => "Hello";
// export default project_title //(File name:1.ts)//exporting project_title from 1.ts
// import { ptitle } from './1';//(File name:2.ts)//importing project_title from 1.ts to 2.ts
//In Default exports we can use a custom name(project_title->ptitle) when importing.
//but In non-default exports we cannot custom name(project_title->ptitle)rather use project_title as project_title only when importing else it will give error.



//destructing

// const nums:number []=[1,2,3,4,5,3,2]
 // const [fst,sec,...third]=nums
 // console.log(third)//[ 3, 4, 5, 3, 2 ]

//  const nums: { name1: string; txt: string; status1: number } = { 
//     name1: "hii", 
//     txt: "good morning", 
//     status1: 404 
// };

// const { name1,txt,status1 } = nums;  // Correct destructuring
// console.log(name1,txt,status1); //hii good morning 404
// let newo={...nums,name1:"hello"}//replace the existing nums.name from 'hii' to 'hello'
// console.log(newo);  // Output: { name1: 'hello', txt: 'good morning', status1: 404 }

//Template Literals
// let myname:string;
// let mycity:string;
// let mycitycode:number;

// const runfunc = (myname,mycity,mycitycode):string=>`My name is ${myname} i am basically from ${mycity} - ${mycitycode}`//${variable_name} is used for template literal(concate)
// console.log(runfunc('Tushar',"Harihara",577601))//My name is Tushar i am basically from Harihara - 577601


 
// interface Person{
//     name: string;
//     age: number;
//   }
  
//   const person: Person = {
//     name: 'John Doe',
//     age: 30,
//   };

// function abc(user:Person)
// {
//     console.log(user.name+""+"first")
//     user.name="rama"
//     console.log(user.name)
// }
//   console.log(abc(person))

// interface person{
//     name:string,
//     color:string,
//     age:number,
//     height:number,
//     salary:number
// }
// interface ge extends person{
//     pf:boolean
// }
// class Employee implements person{
//     name:string="bcd"
//     color:string;
//     age:number;
//     height:number;
//     salary:number;
//     constructor( name:string, color:string, age:number, height:number, salary:number)
//         {
//             console.log(this.name)//bcd
//             console.log(this.name=name)//abc
//         }

// }
// let e1=new Employee("abc","white",22,5,12344)

// let a:string|number="pop";

// type cityname={name:string};
// type citypin={pin:number};
// type city=cityname&citypin;
// let obj:city={
//     name:"harihar",
//     pin:123456
// }
// console.log(typeof obj,obj.name,obj.pin)

// function isString(value: unknown): value is string {
//     return typeof value === "string";
//   }

//   let input: unknown = "Hello";
//   if (isString(input)) {
//     console.log(input.toUpperCase()); // Valid because input is now a string
//   }
//   type ID = string | number;

// let userId: ID = "12345";
// userId = 67890; // Valid


//clas
// class Animal {
//     protected name: string;
  
//     constructor(name: string) {
//       this.name = name;
//     }
  
//     public makeSound(): void {
//       console.log(`${this.name} makes a sound.`);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name: string) {
//       super(name);
//     }
  
//     public bark(): void {
//       console.log(`${this.name} barks!`);
//     }
//   }
  
//   const dog = new Dog("Buddy");
//   dog.makeSound(); // Buddy makes a sound.
//   dog.bark(); // Buddy barks!
// let someValue: any = "Hello,   TypeScript!";
// console.log((<string>someValue).length)


// let  arr:readonly[string,number]=["tushar",99]

// arr.push("harihar")
// console.log(arr)


// type user={
//     nameis:string,
//     ageis:number
// }
// function myfunc(users:user)
// {
// console.log(users.nameis)
// }
// console.log(myfunc({nameis:"Tushar",ageis:19}))     


// let arr:(string | number)[]=[1,2,"hi"]//can assign both astrings , number
// let arr:string [] | number[]=[1,2,3]//cannot assign both a strings , number either complete strings or complete number


// let seatinaeroplane:"corner"|"window"|"middle";
// seatinaeroplane="corner";//ok
// seatinaeroplane="crew";//error

//tuples
let tuples:[string,boolean]=["jaggu",true];
console.log(tuples)