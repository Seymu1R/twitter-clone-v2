import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount : {
        id : 1,
        userName : "Seymu1R_",
        avatar : "https://pbs.twimg.com/profile_images/1558892904537591809/FxgUOFSn_400x400.jpg",
        tag:"Seymour"
    },
    accounts : [
        {
            id : 1,
            userName : "Seymu1R_",
            avatar : "https://pbs.twimg.com/profile_images/1558892904537591809/FxgUOFSn_400x400.jpg",
            tag:"Seymour"
        },
        {
            id : 2,
            userName : "Seymu1R2_",
            avatar : "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp",
            tag:"Seymour22"
        }
    ]
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
