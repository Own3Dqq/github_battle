import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';
import LoadingSpinner from '../Spinner/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux';
import { getResultReset } from '../redux/battle/battle.slice'
import { fetchResponseResult } from '../redux/battle/battle.requests';


const Result = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const data = useSelector(state => state.battle.result)
    console.log(data);

    const Winner = useSelector(state => state.battle.result[0]);
    const Loser = useSelector(state => state.battle.result[1]);
    const loading = useSelector(state => state.battle.loading)
    const error = useSelector(state => state.battle.error)

    useEffect(() => {
        const param = new URLSearchParams(location.search)
        dispatch(fetchResponseResult([param.get('playerOneName'), param.get('playerTwoName')]))
    }, [dispatch])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
            {loading && <LoadingSpinner />}
            <div className='row'>
                <PlayerPreview avatar={Winner?.profile.avatar_url} name={Winner?.profile.login} >
                    {
                        <div className="user__info">
                            <ul className='list'>
                                <li className='list__item'>Name: {Winner?.profile.name ? Winner.profile.name : 'Not assigned'}</li>
                                <li className='list__item'>Location: {Winner?.profile.location ? Winner.profile.location : 'Not assigned'}</li>
                                <li className='list__item'>Company: {Winner?.profile.company ? Winner.profile.company : 'Not assigned'}</li>
                                <li className='list__item'>Followers: {Winner?.profile.following}</li>
                                <li className='list__item'>Public repository: {Winner?.profile.public_repos}</li>
                            </ul>

                            <h2 className='result__title'>Winner</h2>
                            <span className='result__text'>Score: <b>{Winner?.score}</b></span>
                        </div>
                    }
                </PlayerPreview>

                <PlayerPreview avatar={Loser?.profile.avatar_url} name={Loser?.profile.login}  >
                    {

                        <div className="user__info">
                            <ul className='list'>
                                <li className='list__item'>Name: {Loser?.profile.name ? Loser.profile.name : 'Not assigned'}</li>
                                <li className='list__item'>Location: {Loser?.profile.location ? Loser.profile.location : 'Not assigned'}</li>
                                <li className='list__item'>Company: {Loser?.profile.company ? Loser.profile.company : 'Not assigned'}</li>
                                <li className='list__item'>Followers: {Loser?.profile.following}</li>
                                <li className='list__item'>Public repository: {Loser?.profile.public_repos}</li>
                            </ul>

                            <h2 className='result__title'>Loser</h2>
                            <p className='result__text'>Score: <b>{Loser?.score}</b></p>
                        </div>
                    }
                </PlayerPreview>
            </div >
            <div className="row">
                <Link className='button' to={'/battle'} onClick={() => dispatch(getResultReset())} > Play again</Link >

            </div>

        </>
    )
};

export default Result;
