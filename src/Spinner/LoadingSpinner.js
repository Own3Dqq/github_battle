import './spinner.css';

export default function LoadingSpinner() {
    return (
        <div className='loading__overlay loader__show'>
            <div class='lds-facebook'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
