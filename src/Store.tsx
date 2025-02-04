import { configureStore } from "@reduxjs/toolkit";
import loginreducer from "./allowedusers"

 const store = configureStore({
    reducer:loginreducer
})
export default store