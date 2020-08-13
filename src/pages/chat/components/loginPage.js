import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../app.module.scss'
import myStyles from './loginPage.module.scss'

export default function LoginPage({ onValidate }) {

    const input = useRef(null)

    useEffect(() => {
        input.current.focus()
    }, [])

    function handleOnValidate() {
        onValidate(input.current.value)
    }

    return (
        <div className={styles['app']}>
            <div className={styles['head']} />
            <div className={styles['main']}>
                <div className={myStyles['login-style']}>
                    <fieldset>
                        <legend>Phone Number</legend>
                        <input ref={input} type="text" />
                        <Link to="/chat">
                            <button onClick={handleOnValidate}>Login</button>
                        </Link>
                    </fieldset>
                </div>
            </div>
        </div>

    )
}