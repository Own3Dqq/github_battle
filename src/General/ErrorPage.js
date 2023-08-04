import React from 'react';
import { Link } from 'react-router-dom';
import '../style/UX/CustomButtom.scss';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h3 className='text-5xl'>Oops! Page not found</h3>
            <h1 className='flex text-5xl font-family: montserrat font-semibold text-[162px]'>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h1>

            <h2 className='font-4xl font-semibold my-6 uppercase'>
                We are sorry, but the page you requested was not found
            </h2>

            <Link to={'/'}>
                <div class='button-container-2'>
                    <span class='mas'>Back to home page</span>
                    <button type='button' name='Hover'>
                        Back to home page
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default ErrorPage;
