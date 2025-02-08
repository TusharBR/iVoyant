import { createSlice,nanoid} from "@reduxjs/toolkit";

interface userstype
{
    id:number,username: string, name: string, mail: string, password: string, isadmin: string
}
const initialState: { users: userstype[] } = {
    users: [],
  };
export const credentials=createSlice({
    name:"credentials",
    initialState,
    reducers:{
        createuser: (state, action) => { 
            state.users = [...state.users, {id: nanoid(), ...action.payload}]; 
            },
          deleteuser:(state,action)=>{
             
              const freshusers=state.users.filter((ele)=>{
                  return ele.id!==action.payload
              })
              state.users=freshusers
          }
    }
})

export const {createuser,deleteuser}=credentials.actions
export default credentials.reducer