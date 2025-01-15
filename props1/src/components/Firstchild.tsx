type Props= {
    title: string;
    age: number; 
    city:string;
    study:string;
  }


    const Profile = ({ title, age,city,study }: Props) => (
        <div>
          
          <h2 >My name is {title}</h2>
           <p >My age is {age} and i am from {city} city and i have studied {study.toUpperCase()}</p>
           
        </div>
      );   
  


export default Profile