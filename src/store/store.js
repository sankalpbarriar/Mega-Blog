import {configureStore} from '@reduxjs/toolkit'
import { login,logout } from './authSlice';
//Create a new store

const store=configureStore({
    reducer: {
        auth : authSlice,
    }
});


export default store;