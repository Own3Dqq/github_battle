import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Github Battle: Battle with your friends ... and stuff</h1>
            <p>Let's </p>

            <Link className='button' to='battle'>
                Let's find out
            </Link>
        </div>
    );
};

export default Home;
