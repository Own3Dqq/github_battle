import { createSlice } from "@reduxjs/toolkit";
import { fetchResponseResult } from './battle.requests';

const initialState = {
    data: null,
    loading: false,
    error: null,
    result: [],
}

const battleSlice = createSlice(
    {
        name: "battle",
        initialState,
        reducers: {
            getResultReset: (state) => {
                state.error = null;
                state.result = [];
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchResponseResult.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchResponseResult.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.result = action.payload;

                })
                .addCase(fetchResponseResult.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
        },
    },

)


export const {
    setResultOnStore,
    getResultReset
} = battleSlice.actions;

export default battleSlice.reducer