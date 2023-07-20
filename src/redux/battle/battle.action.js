import { INCREMENT_SCORE, GET_RESULT_FAILURE, GET_RESULT_LOADING, GET_RESULT_SUCCESS, GET_RESULT_RESET } from "./battle.constans";

export const getIncrementCountAction = () => ({
    type: INCREMENT_SCORE,
})

export const getResultLoadingAction = () => ({
    type: GET_RESULT_LOADING,
})

export const getResultSuccessAction = (payload) => ({
    type: GET_RESULT_SUCCESS,
    payload,
})

export const getResultFailureAction = (payload) => ({
    type: GET_RESULT_FAILURE,
    payload,
})

export const getResultResetAction = () => ({
    type: GET_RESULT_RESET,
})