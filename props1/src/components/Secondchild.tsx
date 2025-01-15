
import Thirdchild from "./Thirdchild"
type Props= {
    
    age: number; 
    city:string;
    company:string;
  }

const Secondchild = ({ age ,city,company }: Props) => (
        <div>
          
          <h3 >I am from <span>secondchild</span> and my age is <span>{age}</span></h3>
          <Thirdchild city={city} company={company}/>
                     
        </div>
      );   
  


export default Secondchild