import { createAsyncThunk } from '@reduxjs/toolkit';
import { battle } from '../../api'


export const getResult = createAsyncThunk('battle/getResult',  async (array, {rejectedWithValue} ) => {

})




// export const getResult = createAsyncThunk('battle/getResult', async (array, { dispatch }) => {
//     try {
//         dispatch(getResultLoadingAction());
//         const data = await battle(array)
//         dispatch(getResultSuccessAction(data))
//     } catch (error) {
//         dispatch(getResultFailureAction(error))
//     }
// })


// export const getResult = createAsyncThunk('battle/getResult', async (array, { dispatch }) => {
//     try {
//         dispatch(getResultLoadingAction());
//         const data = await battle(array);
//         dispatch(getResultSuccessAction(data));
//     } catch (error) {
//         dispatch(getResultFailureAction(error));
//     }
// });