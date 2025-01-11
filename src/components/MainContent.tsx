
import Footer from "./Footer"
import  Header  from "./Header"

export default function MainContent() {
  return (
    <div style={{width:"100vw",height:"78vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
      <Footer/>
      <Header/>
    </div>
  )
}
