import { createSlice } from '@reduxjs/toolkit'

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    // local storage ne data rkhne ke liye
    pastes:localStorage.getItem("pastes")
    ?JSON.parse(localStorage.getItem("pastes"))// agar data mil jyga to parse krkye le lyge
    :[] // nhi milyga to empty array le lege
  },
  reducers: {
    addToPastes: (state,action) => {
    
      
    },
    updateToPastes: (state,action) => {
     
    },
    removeFromPastes: (state, action) => {
     
    },
    resetAllPastes:(state,action)=>{
        
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes} = pasteSlice.actions

export default pasteSlice.reducer