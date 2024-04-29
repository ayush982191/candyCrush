

import { configureStore, createSlice , PayloadAction } from "@reduxjs/toolkit"

type initState = {
    board : string[],
    boardSize : number,
}


const intitailState : initState  = {
    board : [],
    boardSize : 8
}


const candyCrushSlice = createSlice({
    name : "candyCrush",
    initialState : intitailState , 
    reducers : {
        updateBoard : (state ,action : PayloadAction<string[]>) =>{
            state.board = action.payload
        }

    }
})


 export const store = configureStore({
    reducer : {
        candyCrush : candyCrushSlice.reducer,
    }
})

export const {updateBoard} = candyCrushSlice.actions;

export type rootState = ReturnType< typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;    

