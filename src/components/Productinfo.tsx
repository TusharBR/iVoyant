
import "./Productinfo.css"
const Productinfo: React.FC = () => {
  const obj1:{name1:string,price?:string,availability?:string}={
    name1: "Laptop",
price:"$1200",
availability: "In stock"
  }
  return (
    <div className="proinfomaindiv">
    <div className="proinfodiv">{obj1.name1}<br/> {obj1.price}<br/> {obj1.availability}</div>
    </div>
  )
}
export default Productinfo
