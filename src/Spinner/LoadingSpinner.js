import './spinner.css';

export default function LoadingSpinner() {
    return (
        <div className='loading__overlay loader__show'>
            <div className='loading__spinner'></div>
        </div >
    );
}
