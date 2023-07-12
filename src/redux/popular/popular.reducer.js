import { GET_REPOS_FAILURE, GET_REPOS_LOADING, GET_REPOS_SUCCESS, SELECTED_LANGUAGE } from "./popular.constans";
// import {getSelectedLanguageAction} from 'popular.action'

const initialState = {
    selectedLanguage: 'Eng',
    loading: false,
    repos: [],
    error: null,
}

export const popularReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.playload
            }

        case GET_REPOS_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: action.playload
            }

        case GET_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.playload
            }

        default:
            return state
    }
    return state;
}