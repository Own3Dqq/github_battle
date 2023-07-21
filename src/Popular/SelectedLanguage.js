import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopularRepos } from "../redux/popular/popular.requests";
import { setSelectedLanguage } from '../redux/popular/popular.slice';
import { useLocation } from 'react-router-dom';


const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLanguage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(state => state.popular.selectedLanguage); // All

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const language = searchParams.get('language') || 'All';

        dispatch(setSelectedLanguage(language));
        dispatch(fetchPopularRepos(language));
    }, [dispatch, location.search])

    return (
        <>
            <ul className='languages'>
                {languages.map((language, index) => {
                    return (
                        <li
                            key={index}
                            style={{ color: language === selectedLanguage ? '#d0021b' : '#000000' }}
                            onClick={() => {
                                dispatch(setSelectedLanguage(language))
                                dispatch(fetchPopularRepos(language))
                            }}
                        >
                            {/* {language} */}
                            <Link to={`?language=${language}`}>{language}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default SelectedLanguage;
