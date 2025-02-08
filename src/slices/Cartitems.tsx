/* eslint-disable react-refresh/only-export-components */

import { createSlice, nanoid} from "@reduxjs/toolkit";

interface cartitemstype
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
const initialState: { cartitems: cartitemstype[] } = {
    cartitems: [],
  };
export const Cartitems=createSlice({
    name:"Adminitems",
    initialState,
    reducers:{
        addcartitems: (state, action) => { 
                 
            state.cartitems = [...state.cartitems, {...action.payload,id:nanoid()}]; 
            console.log(state.cartitems, "arr");
          },
          deletecartitems:(state,action)=>{
              console.log("deleteitems",action.payload)
              const freshusers=state.cartitems.filter((ele)=>{
                  return ele.id!==action.payload
              })
              state.cartitems=freshusers
          }
    }
})

export const {addcartitems,deletecartitems}=Cartitems.actions
export default Cartitems.reducer