import React, { useEffect, useState } from 'react';
import { fetchPopularRepos } from './api';
import SelectedLanguage from './SelectedLanguage';
import Repos from './Repos';

const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(selectedLanguage)
            .then((data) => setRepos(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [selectedLanguage]);

    // if (error) {
    //     return 'Error';
    // }

    // if (loading) {
    //     return <div>Loading....</div>;
    // }

    console.log('Render');

    return (
        <div>
            <SelectedLanguage selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
            <Repos repos={repos} />
        </div>
    );
};

export default Popular;
