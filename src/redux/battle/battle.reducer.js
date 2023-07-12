import { INCREMENT_SCORE, GET_RESULT_FAILURE, GET_RESULT_LOADING, GET_RESULT_SUCCESS, GET_RESULT_RESET } from './battle.constans'

const initialState = {
    count: 0,
    erorr: null,
    loading: false,
    result: [],
}

export const battleReducer = (state = initialState, action) => {
    console.log(action, 'Action')

    switch (action.type) {
        case INCREMENT_SCORE:
            return {
                ...state,
                count: state.count + 1,
            }
        case GET_RESULT_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_RESULT_SUCCESS:
            return {
                ...state,
                loading: false,
                result: action.payload
            }
        case GET_RESULT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.playload
            }

        case GET_RESULT_RESET:
            return {
                ...state,
                erorr: null,
                result: [],
            }

        default: return state;
    }
}
