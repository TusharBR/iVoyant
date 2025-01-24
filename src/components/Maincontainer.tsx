import  { createContext } from 'react'

export const first1 = createContext<number>(0) 
const Maincontainer = (props: { children: React.ReactNode }) => {
 
  return (
    <first1.Provider value={10}>
      {props.children}
    </first1.Provider>
  )
}

export default Maincontainer