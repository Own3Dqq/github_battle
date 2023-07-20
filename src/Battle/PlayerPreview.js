import React from 'react';

const PlayerPreview = ({ avatar, username, children }) => {
    return (
        <section>
            <section className='column'>
                <img className='avatar' src={avatar} alt='avatar' />
                <h2 className='username'>{username}</h2>
            </section>
            {children}
        </section>
    );
};

export default PlayerPreview;
