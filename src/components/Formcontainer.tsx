
import "../styles/Formcontainer.css"
const Formcontainer:React.FC=()=> {
  return (
    <>
     <form action="" className="mainform">
     <label htmlFor ="input-id" className="formtitle">My Form : </label>
     <div className="eles"><label htmlFor ="input-id" className="myname">Name : </label><input type="text"/></div>
     <div className="eles"><label htmlFor ="input-id" className="">Myform :&nbsp;&nbsp;</label><input type="text" min="50" max="100"/></div>
     <div className="eles"><label htmlFor ="input-id" className="">Mynumber :&nbsp;&nbsp;</label><input type="text" /></div>
     <div className="eles"><label htmlFor ="input-id" className="">Myage :&nbsp;&nbsp; </label><input type="number" step="5" min="25" max="27"/></div>
     <div className="eles"><label htmlFor ="input-id" className="">Myarea:&nbsp;&nbsp; </label><input type="text" /></div>
     </form>
    </>
  )
}

export default Formcontainer