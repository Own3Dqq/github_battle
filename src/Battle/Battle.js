import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { getIncrementCountAction } from '../redux/battle/battle.action'
import { useDispatch, useSelector } from "react-redux";


const Battle = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.battleReducer.count);

    const [playerData, setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null,
    });


    const handleSubmit = (id, username) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: username,
            [`${id}Image`]: `https://github.com/${username}.png?size200`,
        }));
    };

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null,
        }));
    };

    return (
        <div>
            <div className='contanier'>
                <h1 className='title'>Let's check who will be a stronger</h1>
                <span className='subtitle'>Enter github username in field</span>
                {/* <h2>{counter}</h2>
                <button onClick={() => dispatch(getIncrementCountAction())}>increment</button> */}
            </div>

            <div className='row'>
                {
                    !playerData.playerOneImage ? (
                        <PlayerInput id='playerOne' name='Player 1' onSubmit={handleSubmit} />
                    ) : (
                        <PlayerPreview
                            avatar={playerData.playerOneImage}
                            username={playerData.playerOneName}
                            handleReset={() => handleReset('playerOne')}
                        >
                            {
                                <button className='reset' onClick={() => handleReset('playerOne')}>
                                    Reset
                                </button>
                            }
                        </PlayerPreview>
                    )}
                {!playerData.playerTwoImage ? (
                    <PlayerInput id='playerTwo' name='Player 2' onSubmit={handleSubmit} />
                ) : (
                    <PlayerPreview
                        avatar={playerData.playerTwoImage}
                        username={playerData.playerTwoName}
                        handleReset={() => handleReset('playerTwo')}
                    >
                        {
                            <button className='reset' onClick={() => handleReset('playerTwo')}>
                                Reset
                            </button>
                        }
                    </PlayerPreview>
                )}
            </div>

            {playerData.playerOneImage && playerData.playerTwoImage
                ?
                <Link className='button'
                    to={{
                        pathname: 'results', search: `?playerOneName=${playerData.playerOneName}&&playerTwoName=${playerData.playerTwoName}`,
                    }}
                >
                    Battle
                </Link>
                :
                null}
        </div>


    );
};

export default Battle;