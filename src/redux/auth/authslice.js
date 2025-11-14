import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authActions';

export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    user:null,
    loading:false,
    error:null,
  },
  reducers: {
    logout:(state)=>{
      state.user=null;
      localStorage.removeItem("authToken");
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(loginUser.pending,(state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.loading=false;
      state.user=action.payload;
    })
    .addCase(loginUser.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    })
        .addCase(registerUser.pending,(state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(registerUser.fulfilled,(state,action)=>{
      state.loading=false;
      state.user=action.payload;
    })
    .addCase(registerUser.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { logout }=authSlice.actions;
export default authSlice.reducer;
