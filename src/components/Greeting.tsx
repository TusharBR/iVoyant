
import "./Greeting.css"

const Greeting: React.FC = () => {
  const myname:string="John"
  const getCurrentDate = (): string => {
    const date = new Date();
    return date.toLocaleDateString('en', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
        <div className="maindiv">
          <h1>Welcome to My Website!- {myname}</h1>
    <h1>{getCurrentDate()}</h1>
   
        </div>
    
  )
}
export default Greeting