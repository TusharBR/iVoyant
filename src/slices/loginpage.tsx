import { createSlice,nanoid} from "@reduxjs/toolkit";


export const credentials=createSlice({
    name:"credentials",
    initialState:{
        users:[]
    },
    reducers:{
        createuser: (state, action) => { 
            console.log("createuser",action.payload)          
            state.users = [...state.users, {id: nanoid(), ...action.payload}]; 
            console.log(state.users, "arr");
          },
          deleteuser:(state,action)=>{
              console.log("deleteuser",action.payload)
              const freshusers=state.users.filter((ele)=>{
                  return ele.id!==action.payload
              })
              state.users=freshusers
              console.log(freshusers)
          }
    }
})

export const {createuser,deleteuser}=credentials.actions
export default credentials.reducer