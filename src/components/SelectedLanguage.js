import { memo } from 'react';
import { Link } from 'react-router-dom';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
const SelectedLanguage = memo(({ selectedLanguage, setSelectedLanguage, setQueryParams }) => {
    return (
        <>
            <ul className='languages'>
                {languages.map((language, index) => {
                    return (
                        <li
                            key={index}
                            style={{ color: language === selectedLanguage ? '#d0021b' : '#000000' }}
                            className={language === selectedLanguage ? 'x' : 'y'}
                            onClick={() => {
                                setSelectedLanguage(language);
                                setQueryParams({ language: language });
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
