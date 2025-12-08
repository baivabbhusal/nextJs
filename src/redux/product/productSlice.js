const { createSlice } = require("@reduxjs/toolkit");

const productSlice=createSlice({
    name:"products",
    initialState:{
        refresh:0,
    },
    reducers:{
        refreshList:(state)=>{
            state.refresh+=1;

        },
    },
});
export const {refreshList}=productSlice.actions;
export default productSlice.reducer;