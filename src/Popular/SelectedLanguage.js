import { memo } from 'react';
import { Link } from 'react-router-dom';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
const SelectedLanguage = memo(({ selectedLanguage, setSelectedLanguage }) => {
    return (
        <>
            <ul className='languages'>
                {languages.map((language, index) => {
                    return (
                        <li
                            key={index}
                            className={language === selectedLanguage ? 'active' : ''}
                            onClick={() => {
                                setSelectedLanguage(language);
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
