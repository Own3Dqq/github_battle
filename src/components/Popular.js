import React, { useEffect, useState } from 'react';
import { fetchPopularRepos } from './api';
import SelectedLanguage from './SelectedLanguage';
import Repos from './Repos';
import LoadingSpinner from './LoadingSpinner';
import { useSearchParams } from 'react-router-dom';

const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setLoading(true);
        const params = searchParams.get('language'); // JavaScript
        setSelectedLanguage(params);

        fetchPopularRepos(selectedLanguage)
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
                setQueryParams={setSearchParams}
            />
            <Repos repos={repos} />
        </div>
    );
};

export default Popular;
