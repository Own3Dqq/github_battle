import {
    getReposFailureAction,
    getReposLoadingAction,
    getReposSuccessAction,
    getSelectedLanguageAction
} from "./popular.action";
import {fetchPopularRepos} from '../../api'

export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(getSelectedLanguageAction(selectedLanguage));
    dispatch(getReposLoadingAction());

    fetchPopularRepos(selectedLanguage)
        .then(repos => dispatch(getReposSuccessAction(repos)))
        .catch(error => dispatch(getReposFailureAction(error)))

}