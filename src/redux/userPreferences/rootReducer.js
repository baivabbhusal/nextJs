import { combineReducers } from "@reduxjs/toolkit";
import  authReducer  from "@/redux/auth/authSlice";
import  productReducer  from '@/redux/product/productSlice';
import  cartReducer  from '@/redux/cart/cartSlice';
import userPreferencesReducer from '@/redux/userPreferences/userPreferenceSlice';


const rootReducer=combineReducers({
    auth:authReducer,
    userPreferences:userPreferencesReducer,
    product:productReducer,
    cart:cartReducer,

});
export default rootReducer;