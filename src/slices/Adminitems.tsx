import { createSlice,nanoid} from "@reduxjs/toolkit";


export const Adminitems=createSlice({
    name:"Adminitems",
    initialState:{items :[] 
    },
    reducers:{
        additems: (state, action) => { 
            console.log("additems",action.payload)          
            state.items = [...state.items, {...action.payload,id:nanoid()}]; 
            console.log(state.items, "arr");
          },
          deleteitems:(state,action)=>{
              console.log("deleteitems",action.payload)
              const freshusers=state.items.filter((ele)=>{
                  return ele.id!==action.payload
              })
              state.items=freshusers
              console.log(freshusers)
          }
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const {additems,deleteitems}=Adminitems.actions
export default Adminitems.reducer