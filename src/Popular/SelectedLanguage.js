import {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {getRepos} from "../redux/popular/popular.thunk";

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLanguage = memo(() => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage)

    useEffect(() => {
        dispatch(getRepos(selectedLanguage))
    }, [])

    return (
        <>
            <ul className='languages'>
                {languages.map((language, index) => {
                    return (
                        <li
                            key={index}
                            className={language === selectedLanguage ? 'active' : ''}
                            onClick={() => {
                                dispatch(getRepos(language))
                            }}
                        >
                            <Link to={`?language=${language}`}>{language}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
});

export default SelectedLanguage;
