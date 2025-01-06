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


 
interface Person{
    name: string;
    age: number;
  }
  
  const person: Person = {
    name: 'John Doe',
    age: 30,
  };

function abc(user:Person)
{
    console.log(user.name+""+"first")
    user.name="rama"
    console.log(user.name)
}
  console.log(abc(person))

  