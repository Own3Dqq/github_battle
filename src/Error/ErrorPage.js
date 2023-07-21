import { useRouteError, Link } from 'react-router-dom';
import style from './ErrorPage.module.css'

export default function ErrorPage() {
    // const error = useRouteError();

    return (
        <>
            <div className={style.center}>
                <div className={style.error}>
                    <div className={style.number}>4</div>
                    <div className={style.illustration}>
                        <div className={style.circle}></div>
                        <div className={style.clip}>
                            <div className={style.paper}>
                                <div className={style.face}>
                                    <div className={style.eyes}>
                                        <div className={`${style.eye} ${style.eyeLeft}`}></div>
                                        <div className={`${style.eye} ${style.eyeRight}`}></div>
                                    </div>
                                    <div className={`${style.rosyCheeks} ${style.rosyCheeksLeft}`}></div>
                                    <div className={`${style.rosyCheeks} ${style.rosyCheeksRight}`}></div>
                                    <div className={style.mouth}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={style.number}>4</div>
                </div>
                <div class="text">Oops. The page you're looking for doesn't exist.</div>
                <Link class="button" href={'/'}>Back Home</Link>
            </div>
        </ >
    )
}


