


interface props{
    myfunc:()=>void
}

const Component = ({myfunc}:props) => {
  return (
    <div><button onClick={myfunc}>theme change</button></div>
  )
}

export default Component