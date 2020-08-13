import React, { useState, useRef, useEffect } from 'react'
import TitleBar from './titleBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './appStatus.module.scss';
import LeftMenuOnChatList from './leftMenuOnChatList'

function useLegacyState(initState) {
  const [state, setState] = useState(initState);
  return [state, newState => setState({ ...state, ...newState })]
}

export default function AppStatus({ onSearch, onClearSearch }) {
  const [mode, setMode] = useState('list');
  const [searchKeyword, setSearchKeyword] = useState('')
  const input = useRef(null);

  function gotoSearchMode() {
    setMode('search');
  }

  function gotoListMode() {
    setMode('list');
    onClearSearch()
  }

  useEffect(
    () => {
      if (mode === 'search') {
        input.current.focus();
      }
    },
    [mode]
  );

  function handleSetKeyword(e) {
    let keyword = e.target.value
    setSearchKeyword(prevState => {
      return keyword
    })
    onSearch(keyword)
  }

  const listMode = mode === 'list';

  return (
    <TitleBar
      first={
        <LeftMenuOnChatList onMode={gotoListMode} listMode={listMode} />
      }
      middle={
        <div className={styles['app-title']}>
          {listMode && "Fancy Messenger"}
          {!listMode && <input
            type='text'
            className={styles['search-text']}
            ref={input}
            value={searchKeyword}
            onChange={handleSetKeyword}
          />}
        </div>
      }
      last={listMode && <FontAwesomeIcon
        icon={faSearch}
        size='lg'
        color='#009588'
        className={styles['pointer']}
        onClick={gotoSearchMode}
      />}
    />
  )
}
