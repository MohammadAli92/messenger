import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './appStatus.module.scss';
import myStyles from './leftMenuOnChatList.module.scss';

export default function LeftMenuOnChat({ onMode, listMode }) {

    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(!show)
    }

    return (
        <>
            <div>
                <FontAwesomeIcon
                    icon={listMode ? faBars : faArrowLeft}
                    size='lg'
                    color='#009588'
                    className={styles['pointer']}
                    onClick={listMode ? handleShow : onMode}
                />
            </div>
            <div>
                <div className={show ? myStyles['show'] : myStyles['menu']}>
                    <div className={myStyles['arrow-back']}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size='lg'
                            color='#f1f1f1'
                            className={styles['pointer']}
                            onClick={handleShow}
                        />
                    </div>
                    <div>item 1</div>
                    <div>item 2</div>
                    <div>item 3</div>
                    <div>item 4</div>
                    <div>item 5</div>
                    <div>item 5</div>
                    <div>item 5</div>
                    <div>item 5</div>
                    <div>item 5</div>
                </div>
            </div>
        </>
    )
}




