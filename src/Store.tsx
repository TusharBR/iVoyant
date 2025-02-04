import { configureStore } from "@reduxjs/toolkit";
import credentials from "./slices/loginpage";
import Adminitems from "./slices/adminitems";
import Cartitems from "./slices/Cartitems";

const universalstore=configureStore({
    reducer:{credentials,Adminitems,Cartitems}
})
export default universalstore