import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
    username: '',
    displayName: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail: (state, action) => { state.email = action.payload },
        setPassword: (state, action) => { state.password = action.payload },
        setUsername: (state, action) => { state.username = action.payload },
        setDisplayName: (state, action) => { state.displayName = action.payload },
    }
})

export const { 
    setEmail, 
    setPassword, 
    setDisplayName, 
    setUsername,
  } = authSlice.actions;
  
  export default authSlice.reducer;