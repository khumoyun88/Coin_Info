import { createSlice } from "@reduxjs/toolkit";

const selectedCoinsSlice = createSlice({
  name: "selectedCoins",
  initialState: {
    selectedCoins: [],
  },
  reducers: {
    updateSelectedCoins(state, action) {
      state.selectedCoins = action.payload;
    },
    removeCoin:(state , action) => {
      state.selectedCoins= state.selectedCoins.filter(coin => coin.id !==action.payload)
    }
  },
});

export const { updateSelectedCoins, removeCoin } = selectedCoinsSlice.actions;
export default selectedCoinsSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const selectedCoinsSlice = createSlice({
//     name:'selectedCoins',
//     initialState:{
//         coins:[]
//     },
//     reducers:{
//         add:(state,action)=>{
//             state.coins=action.payload
//         },
//         remove:(state,action)=>{
//             // state.coins=action.payload
//             console.log(action.payload);
            
//         },

//     }
// })

// export const {add} = selectedCoinsSlice.actions
// export default selectedCoinsSlice.reducer