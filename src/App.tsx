import { useReducer } from 'react'; 
type Action = | { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };
function reducer(state: number, action:Action): number 
{ 
switch (action.type) 
     {  case 'increment': return  state= state + 1 ;
        case 'decrement': return  state= state - 1 ; 
        case 'reset': return 0; } } 
const Counter = () => 
{ const [state, dispatch] = useReducer(reducer,0); 
return ( 
     <div> <p>{state}</p> 
     <button onClick={() => dispatch({ type: 'increment' })}>Increment</button> 
     <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button> 
     <button onClick={() => dispatch({ type: 'reset' })}>Reset</button> </div> ); }; 
export default Counter;