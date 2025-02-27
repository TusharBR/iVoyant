    interface props
    {
        city:string;
        company:string;
    }

    const Thirdchild=({city,company}:props)=> {
  return (
    <div><h3>I am from <span>Thirdchild</span> and my city is <span>{city}</span> and i work at <span>{company}</span></h3></div>
  )
}

export default Thirdchild