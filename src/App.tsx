import  { useEffect, useState } from 'react';


//no dependency 
const App = () => {

 const [first, setfirst] = useState<number>(0)
  useEffect(() => {
    console.log(`runs at first then every time when component re-renders`);//runs at first then every time when component re-renders`
  });

const updateclick=()=>
{
  setfirst(first+1)
}

  return (
    <div>
      <p>Useeffect with no dependency</p>
      <button onClick={updateclick}></button>
    </div>
  );
};
export default App;





// //empty array dependency []
// const App = () => {


//   useEffect(() => {
//     console.log(`Runs only single time`);//runs when compo renders for first time
//   },[]);



//   return (
//     <div>
//       <p>Useeffect with empty array dependency</p>
    
//     </div>
//   );
// };
// export default App;



// //Single dependencies [dependency]
// const App = () => {
//   const [count, setCount] = useState<number>(0);

//   useEffect(() => {
//     console.log(`count is ${count}`);//runs at first and when state updates(when count values changes)
//   }, [count]);

// const updatestate=()=>{
//  setCount(count + 1);
// }

//   return (
//     <div>
//       <p>Count is: {count}</p>
//       <button onClick={updatestate}>Increment Count</button>
//     </div>
//   );
// };
// export default App;


// //Multiple dependencies [dependency0,dependency1,....]
// const App = () => {
//   const [count, setCount] = useState<number>(0);
//   const [text, setText] = useState<string>('');

//   useEffect(() => {
//     console.log(`count/text changed, count is ${count} text: ${text}`);//runs whwn either / both of their value updated
//   }, [count, text]);

// const updatestate=()=>{
//  setCount(count + 1);
// }

//   return (
//     <div>
//       <p>Count is: {count}</p>
//       <button onClick={updatestate}>Increment Count</button>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//         placeholder="type here" 
//       />
//     </div>
//   );
// };

// export default App;


// //clean up (unmount)
// const App = () => {
//   const [first, setfirst] = useState<number>(0)

//   useEffect(() => {
//     console.log('Every time when re-renders');
    
//     return () => {
//       console.log('runs before every rerender and component unmount');//clean up
//     };
//   });
//   const updateclick=()=>
//     {
//       setfirst(first+1)
//     }
//   return (
//     <div>
//       <p>Count: {first}</p>
//       <button onClick={updateclick}>Increment</button>
//     </div>
//   );
// };

// export default App;