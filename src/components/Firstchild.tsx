
type Props= {
    myfunc:(mes:string)=>void;
  }
    const Firstchild = ({ myfunc }:Props) => {
  
      return (
          <div>
              <button onClick={() => myfunc("Hello from Child!")}>Click me (Firstchild component)</button>
          </div>
      );
  };
  

export default Firstchild

