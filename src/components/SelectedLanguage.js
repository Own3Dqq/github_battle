import React from 'react';
import { memo } from 'react';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
const SelectedLanguage = memo(({ selectedLanguage, setSelectedLanguage }) => {
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
                            }}
                        >
                            {language}
                        </li>
                    );
                })}
            </ul>
        </>
    );
});

export default SelectedLanguage;
