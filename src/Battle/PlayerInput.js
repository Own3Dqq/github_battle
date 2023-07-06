import React, { useEffect, useState } from 'react';

const PlayerInput = ({ id, name, onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(id, username);
    };

    return (
        <>
            <form className='column' onSubmit={handleSubmit}>
                <label className='header' htmlFor='username'>
                    {name}
                </label>
                <input
                    type='text'
                    name='username'
                    placeholder='Github Username'
                    autoComplete='off'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className='button' type='submit' disabled={!username}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default PlayerInput;
