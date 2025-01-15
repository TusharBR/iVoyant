
type Props= {
  myfunc:(mes:string)=>void;
}
  const Thirdchild = ({ myfunc }:Props) => {
   
    return (
        <div>
            <button onClick={()=>myfunc("Third child")}>Click me (Thirdchild component)</button>
        </div>
    );
};
export default Thirdchild