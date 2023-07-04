import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:'post',
    initialState:[],
    reducers:{
        fetchItem(state, action) {
          
        }
    }
})

export const postAction = postSlice.actions;
export default postSlice;