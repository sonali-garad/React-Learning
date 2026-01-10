import { createSlice } from "@reduxjs/toolkit"; 


const counterSlice = createSlice(
    {
        name: "Counter",

       initialState:{
        count: 0,
       },

        reducers:{
            increment : (state)=> {
                state.count = state.count+1;
            },
            decrement : (state) =>
            {
                state.count = state.count -1 ;
            },
            randomAddition: (state,action)=>
            {
                state.count = state.count+ Number(action.payload);
            },
            reset: (state) =>
            {
                state.count = 0
            }
        }
    }
)
export const {increment, decrement, randomAddition, reset} = counterSlice.actions;
export default counterSlice.reducer;