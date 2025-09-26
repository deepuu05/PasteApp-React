import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    // local storage me data rkhne ke liye
    pastes:localStorage.getItem("pastes")
    ?JSON.parse(localStorage.getItem("pastes"))// agar data mil jyga to parse krkye le lyge
    :[] // nhi milyga to empty array le lege
  },
  reducers: {
    addToPastes: (state,action) => {
        const paste =action.payload;
        // add check -> paste is already exist ke liy khud bnana hai
        state.pastes.push(paste);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Created Succesfully")
      
    },
    updateToPastes: (state,action) => {
     const paste = action.payload
     const index = state.pastes.findIndex((item)=>item._id=== paste._id)
    if(index>=0){
        state.pastes[index] = paste
         localStorage.setItem("pastes",JSON.stringify(state.pastes))
         toast.success("Paste Updated ")
        }  
    },


    removeFromPastes: (state, action) => {
     const pasteId = action.payload;
     const index =state.pastes.findIndex((item)=>item._id ===pasteId)
     if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast.success("Paste Deleted")
     }
    },
    resetAllPastes:(state,action)=>{

        
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes} = pasteSlice.actions

export default pasteSlice.reducer