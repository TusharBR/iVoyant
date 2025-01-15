    interface props
    {
        city:string;
        company:string;
    }

    const Thirdchild:React.FC<props>=(abc)=> {
        const {city,company}:props=abc
  return (
    <div><h3>I am from <span>thirdchild</span> and my city is <span>{city}</span> and i work at <span>{company}</span></h3></div>
  )
}

export default Thirdchild