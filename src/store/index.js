import { configureStore} from "@reduxjs/toolkit";
import itemSlice from "./item-slice";
import postSlice from "./post-slice";

 const store = configureStore({
    reducer:{item: itemSlice.reducer, post: postSlice.reducer}
})


export default store;
