import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';
import LoadingSpinner from '../Spinner/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux';
import { getResult } from '../redux/battle/battle.thunk';
import { getResultResetAction } from '../redux/battle/battle.action';


const Result = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const Winner = useSelector(state => state.battleReducer.result[0]);
    const Loser = useSelector(state => state.battleReducer.result[1]);
    const loading = useSelector(state => state.battleReducer.loading)
    const error = useSelector(state => state.error)

    useEffect(() => {
        const param = new URLSearchParams(location.search)
        dispatch(getResult([param.get('playerOneName'), param.get('playerTwoName')]))
    }, [])

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
                <Link className='button' to={'/battle'} onClick={() => dispatch(getResultResetAction())} > Play again</Link >

            </div>

        </>
    )
};

export default Result;
