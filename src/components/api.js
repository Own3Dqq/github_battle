import axios from 'axios';

const handleError = (error) => console.log(error);

export const fetchPopularRepos = (language) => {
    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}`);
    return axios
        .get(encodeURI)
        .then((response) => response.data.items)
        .catch(handleError);
};
