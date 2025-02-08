import { createSlice,nanoid} from "@reduxjs/toolkit";


interface itemstype
{
    category:string,
    description:string,
    id:string,
    image:string,
    price:number,
    rating:{
    rate:number,
    count:number
    },
    title:string
}
const initialState: { items: itemstype[] } = {
    items: [],
  };
export const Adminitems=createSlice({
    name:"Adminitems",
    initialState,
    reducers:{
        additems: (state, action) => { 
               
            state.items = [...state.items, {...action.payload,id:nanoid()}]; 
            console.log(state.items, "arr","length",state.items[0]);
          },
          deleteitems:(state,action)=>{
              //.log("deleteitems",action.payload)
              const freshusers=state.items.filter((ele)=>{
                  return ele.id!==action.payload
              })
              state.items=freshusers
            //  console.log(freshusers)
          }
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const {additems,deleteitems}=Adminitems.actions
export default Adminitems.reducer