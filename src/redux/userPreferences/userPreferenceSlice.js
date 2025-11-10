import { DARK_THEME, LIGHT_THEME } from '@/constants/theme';
import { createSlice } from '@reduxjs/toolkit'

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState:{
    theme:LIGHT_THEME,
  },
  reducers: {
    toggleTheme:(state)=>{
      state.theme=state.theme==LIGHT_THEME ? DARK_THEME:LIGHT_THEME;
    }
  },
});
export const {toggleTheme}=userPreferencesSlice.actions;

// Action creators are generated for each case reducer function
export default userPreferencesSlice.reducer;