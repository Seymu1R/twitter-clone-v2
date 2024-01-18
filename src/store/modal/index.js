import {createSlice} from "@reduxjs/toolkit";

const initialState = {
     modal : false
}
const  modal = createSlice({
    name : 'modal',
    initialState,
    reducers:{
        //methods manipulation
        _setModal:(state, action) =>{
            state.modal = action.payload
        },
        _removeModal : (state ,action) => {
            state.modal = false
        }
    }
})

export  default modal.reducer

export  const  {_removeModal , _setModal} = modal.actions
