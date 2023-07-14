import { createSlice } from "@reduxjs/toolkit";
import { getResult } from './battle.requsts';

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
            getResultLoadingAction: (state) => {
                state.loading = true;
                state.error = null;
            },
            getResultSuccessAction: (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            },
            getResultFailureAction: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            getResultResetAction: (state) => {
                state.error = null;
                state.result = [];
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(getResult.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getResult.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                    state.error = null;
                })
                .addCase(getResult.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
        },
    },

)




export const {
    getResultLoadingAction,
    getResultSuccessAction,
    getResultFailureAction,
    getResultResetAction
} = battleSlice.actions;

export default battleSlice.reducer