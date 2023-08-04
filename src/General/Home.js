import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='max-w-lg text-center'>
                <h1 className='text-[46px] font-bold flex flex-col '>Github Battle</h1>

                <p className='text-md'>
                    GitHub Battle is a web application where you can compete against colleagues and friends to find out
                    who's more impressive in the coding world. Discover who stands out by comparing GitHub profiles and
                    repositories in a friendly rivalry.
                </p>
            </div>

            <Link to={'/battle'}>
                <div class='button-container-2'>
                    <span class='mas'>Let's find out</span>
                    <button type='button' name='Hover'>
                        Let's find out
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Home;
