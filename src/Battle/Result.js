import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { battle } from '../api';
import PlayerPreview from './PlayerPreview';
import LoadingSpinner from '../Spinner/LoadingSpinner'

const Result = () => {
    const [loading, setLoading] = useState('false');
    const [error, setError] = useState('')
    const location = useLocation();
    const [playerResult, setPlayerResult] = useState({
        playerWinner: {},
        playerLoser: {},

    });


    useEffect(() => {
        setLoading('true')
        const param = new URLSearchParams(location.search);

        battle([param.get('playerOneName'), param.get('playerTwoName')]).then((data) => {
            console.log(data, 'data');
            setPlayerResult({
                playerWinner: {
                    login: data[0].profile.login,
                    avatar: data[0].profile.avatar_url,
                    followers: data[0].profile.followers,
                    repos: data[0].profile.public_repos,
                    location: data[0].profile.location,
                    name: data[0].profile.name,
                    company: data[0].profile.company,
                    score: data[0].score,
                },
                playerLoser: {
                    login: data[1].profile.login,
                    avatar: data[1].profile.avatar_url,
                    followers: data[1].profile.followers,
                    repos: data[1].profile.public_repos,
                    location: data[1].profile.location,
                    name: data[1].profile.name,
                    company: data[1].profile.company,
                    score: data[1].score,
                }
            })
            console.log(data[0].profile.login)
        })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading && <LoadingSpinner />}
            <div className='row'>
                <PlayerPreview avatar={playerResult.playerWinner.avatar} name={playerResult.playerWinner.login} >
                    {
                        <div className="container">
                            <ul>
                                <li>Name: {playerResult.playerWinner.name ? playerResult.playerWinner.name : 'Not assigned'}</li>
                                <li>Location: {playerResult.playerWinner.location ? playerResult.playerWinner.location : 'Not assigned'}</li>
                                <li>Company: {playerResult.playerWinner.company ? playerResult.playerWinner.company : 'Not assigned'}</li>
                                <li>Followers: {playerResult.playerWinner.followers}</li>
                                <li>Public repository: {playerResult.playerWinner.repos}</li>
                            </ul>

                            <h2>Winner</h2>
                            <span>Score: {playerResult.playerWinner.score}</span>
                        </div>
                    }
                </PlayerPreview>
                <PlayerPreview avatar={playerResult.playerLoser.avatar} name={playerResult.playerLoser.login}  >
                    {

                        <div className="container">
                            <ul>
                                <li>Name: {playerResult.playerLoser.name ? playerResult.playerLoser.name : 'Not assigned'}</li>
                                <li>Location: {playerResult.playerLoser.location ? playerResult.playerLoser.location : 'Not assigned'}</li>
                                <li>Company: {playerResult.playerLoser.company ? playerResult.playerLoser.company : 'Not assigned'}</li>
                                <li>Followers: {playerResult.playerLoser.followers}</li>
                                <li>Public repository: {playerResult.playerLoser.repos}</li>
                            </ul>

                            <h2>Loser</h2>
                            <p>Score: {playerResult.playerLoser.score}</p>
                        </div>
                    }
                </PlayerPreview>
                <div>
                    <Link className='button' to={'/battle'} > Play again</Link >
                </div>
            </div >

        </>
    )
};

export default Result;
