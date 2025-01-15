import Secondchild from "./Secondchild";
type Props= {
    name: string;
    age: number; 
    city:string;
    company:string;
  }


    const Firstchild = ({ name, age,city,company }: Props) => (
        <div>
          <h3 >I am from <span>Firstchild</span> and my name is <span>{name}</span></h3>
           <Secondchild  age={age} city={city} company={company}/>
        </div>
      );   
  


export default Firstchild