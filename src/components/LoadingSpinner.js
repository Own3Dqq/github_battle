import './spinner.css';

export default function LoadingSpinner({ loading }) {
    return (
        <div className={loading && `loading__overlay loader__show`}>
            <div className='loading__spinner'></div>
        </div>
    );
}
