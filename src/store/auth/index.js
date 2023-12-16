import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount : {
        id : 1,
        userName : "Seymu1R_",
        avatar : "https://pbs.twimg.com/profile_images/1558892904537591809/FxgUOFSn_400x400.jpg",
        tag:"Seymour"
    },
    accounts : []
}
const  auth = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        //methods manipulation
        _addAccount:(state,action)=>{
          state.actions.push(action.payload)
        },
        _removeAccount:(state, action) =>{
            state.actions.filter(account=> account.id!== action.payload);
            if(state.currentAccount &&  action.payload === state.currentAccount.id){
              this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount:(state, action) =>{
            state.currentAccount = action.payload
        }
    }
})

export  default auth.reducer

export  const  {_removeAccount , _addAccount , _setCurrentAccount} = auth.actions
