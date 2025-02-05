/* eslint-disable react-refresh/only-export-components */

import { createSlice, nanoid} from "@reduxjs/toolkit";


export const Cartitems=createSlice({
    name:"Adminitems",
    initialState:{cartitems :[]  
    },
    reducers:{
        addcartitems: (state, action) => { 
            console.log("additems",action.payload)          
            state.cartitems = [...state.cartitems, {...action.payload,id:nanoid()}]; 
            console.log(state.cartitems, "arr");
          },
          deletecartitems:(state,action)=>{
              console.log("deleteitems",action.payload)
              const freshusers=state.cartitems.filter((ele)=>{
                  return ele.id!==action.payload
              })
              state.cartitems=freshusers
              console.log(freshusers)
          }
    }
})

export const {addcartitems,deletecartitems}=Cartitems.actions
export default Cartitems.reducer