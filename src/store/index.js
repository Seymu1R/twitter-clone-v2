import  {configureStore} from "@reduxjs/toolkit";
import auth from "./auth/index.js";
import modal  from "./modal/index.js";
import appearance from "./appearance/index.js";

const store = configureStore({
   reducer : {
       //stores
       auth,
       modal,
       appearance
   }
})

export  default  store