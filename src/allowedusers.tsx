import { createSlice, nanoid } from "@reduxjs/toolkit";

export const allowedusers = createSlice({
  name: "users",
  initialState: { users: [ ] }, 
  reducers: {
    createuser: (state, action) => {
      console.log(action.payload, "payload");
      
      const newuser = { id: nanoid(), ...action.payload };
      console.log(newuser, "newuser");
      
      state.users = [...state.users, newuser]; // This works correctly with Redux Toolkit

      console.log(state.users, "arr"); // Logs updated array
    },
    deleteuser:(state,action)=>{
        console.log("freshusers")
        const freshusers=state.users.filter((ele)=>{
            return ele.id!==action.payload
        })
        state.users=freshusers
        console.log(freshusers)
    }
    
  },
});

export const { createuser ,deleteuser} = allowedusers.actions;
export default allowedusers.reducer;
