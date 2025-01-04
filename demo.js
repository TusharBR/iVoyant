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
//arrow functions
// const func=(para1:number):number=>
// {
//     return para1*para1
// }
// console.log(func(5))|
// this :its value is based on where it is called
// const func1=()=>
// {
//     let obj:{color:string,func():void}={
//             color:"red",
//             // func(){
//             //     console.log(this.color); // red
//             // }
//             // func:()=>{
//             //     console.log(this.color); // undefined/window
//             // }
//     }
//     return obj
// }
// func1().func();
