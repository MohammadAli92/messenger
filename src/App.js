import React, { useState, useEffect, useReducer } from 'react';
import Chat from './pages/chat/index';
import styles from './app.module.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/chat/components/loginPage'

function App() {

  const [login, setLogin] = useState('a')

  function handleValidate(value){
    setLogin(value)
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => {
          return <LoginPage onValidate={handleValidate}/>
        }} />

        <Route path="/chat" render={() => {
          return login ? (
            <div className={styles['app']}>
              <div className={styles['head']} />
              <div className={styles['main']}>
                <Chat />
              </div>
            </div>
          ) : <Redirect to="/" />
        }} />
      </Switch>
    </Router>

  );
}

export default App;
