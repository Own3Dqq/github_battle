import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getResult } from './battle.requests';

const initialState = {
    data: null,
    loading: false,
    error: null,
    result: [],
}



/* export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function () {
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await responce.json();
        return data
    }
)
 */
/* 
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.message;
        }
    }
}) */




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