import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status:false,       //abhi user authenticated nahi hai
    userData:null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{  
        login:(state,action)=>{    //to see wether user is logged
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;    //agar aap logged nahi to  
            state.userData=null;    //userData is null
        }
     }
})

export const {login,logout} =authSlice.actions;    //individual functions
export default authSlice.reducer;