import React, { useState } from 'react';

const PlayerInput = ({ id, name, onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(id, username);
    };

    return (
        <>
            <form className='column' onSubmit={handleSubmit}>
                <label className='text-4xl font-semibold' htmlFor='username'>
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

                <div class='button-container-2'>
                    <span class='mas'>Submit</span>
                    <button disabled={!username} type='submit' name='Hover'>
                        Submit
                    </button>
                </div>

                {/* <button className='button' type='submit' disabled={!username}>
                    Submit
                </button> */}
            </form>
        </>
    );
};

export default PlayerInput;
