import { GET_REPOS_FAILURE, GET_REPOS_LOADING, GET_REPOS_SUCCESS, SELECTED_LANGUAGE } from "./popular.constans";

export const getSelectedLanguageAction = (playload) => ({
    type: SELECTED_LANGUAGE,
    playload,
})

export const getReposLoadingAction = () => ({
    type: GET_REPOS_LOADING,
})

export const getReposSuccessAction = (playload) => ({
    type: GET_REPOS_SUCCESS,
    playload,
})

export const getReposFailureAction = (playload) => ({
    type: GET_REPOS_FAILURE,
    playload,
})