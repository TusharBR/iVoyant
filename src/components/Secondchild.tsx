
type Props= {
  myfunc:(mes:string)=>void;
}
  const Secondchild = ({ myfunc }:Props) => {
   
    return (
        <div>
            <button onClick={()=>myfunc("Second child")}>Click me (Secondchild component)</button>
        </div>
    );
};


export default Secondchild