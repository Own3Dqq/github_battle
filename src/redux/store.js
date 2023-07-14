import { configureStore } from "@reduxjs/toolkit";
import popularSlice from "./popular/popular.slice";
import battleSlice from './battle/battle.slice';



const store = configureStore({
    reducer: {
        popular: popularSlice,
        battle: battleSlice,

    },
})

export default store;
