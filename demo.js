//let,const
// console.log(a)//undefined
// let a:number;
// // const a:string;//error should be initialsed
// interface Person{
//     name: string;
//     age: number;
//   }
function abc(user) {
    console.log(user.name + "" + "first");
    user.name = "rama";
    console.log(user.name);
    return user.name;
}
console.log(abc({
    name: 'John Doe',
    age: 30,
}));
