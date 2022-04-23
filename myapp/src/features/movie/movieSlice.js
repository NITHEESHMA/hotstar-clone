import {createSlice} from "@reduxjs/toolkit";


const initialState={
    data:[],
}



const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.data=action.payload;
        }
    }
})


export const {setMovies}=movieSlice.actions;


export const selectMovies=(state)=>state.movie.data;

export default movieSlice.reducer;