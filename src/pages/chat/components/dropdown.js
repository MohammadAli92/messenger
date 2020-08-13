import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styles from './dropdown.module.scss'

export default function Dropdown() {
    const [show, setShow] = useState(false)
    const [options, setOptions] = useState(['avval', 'dovvom', 'sevvom', 'chaharom'])
    const parentWrapper = useRef(null)

    useEffect(() => {
        function handleClose(event) {
            if (parentWrapper.current && !parentWrapper.current.contains(event.target)) {
                setShow(false)
            }
        }
        document.addEventListener("mousedown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
        }
    }, [])

    function handleOpen(e) {
        setShow(true)
    }
    

    const renderOption = options.map((item, index )=> <div key={index}>{item}</div>)

    return (
        <div>
            <div ref={parentWrapper} style={{ padding: '0 20px', cursor: 'pointer' }} onClick={handleOpen}>
                <FontAwesomeIcon icon={faEllipsisV} size='lg' color='#009588' className='pointer' />
            </div>
            {show &&
                <div className={styles['menu']}>
                    {renderOption}
                </div>
            }
        </div>
    )
}