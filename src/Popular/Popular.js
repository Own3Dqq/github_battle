import React, { useEffect, useState } from 'react';
import { fetchPopularRepos } from '../api';
import SelectedLanguage from './SelectedLanguage';
import Repos from './Repos';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import { useLocation } from 'react-router-dom';


const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    const location = useLocation();


    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(location.search).get('language');
        setSelectedLanguage(params ? params : selectedLanguage);

        console.log(selectedLanguage);

        fetchPopularRepos(params && selectedLanguage)
            .then((data) => setRepos(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));


    }, [selectedLanguage]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {loading && <LoadingSpinner loading={loading} />}
            <SelectedLanguage
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            <Repos repos={repos} />
        </div>
    );
};

export default Popular;
