import { configureStore } from "@reduxjs/toolkit";
import credentials from "./slices/loginpage";
import Adminitems from "./slices/Adminitems";
import Cartitems from "./slices/Cartitems";
import { cartApi } from './apis/Cartapi';

const universalstore=configureStore({
    reducer:{credentials,Adminitems,Cartitems,[cartApi.reducerPath]: cartApi.reducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cartApi.middleware),
  });
  export type RootState = ReturnType<typeof universalstore.getState>;
  export type AppDispatch = typeof universalstore.dispatch;
export default universalstore