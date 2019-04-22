import React, { Component } from 'react';
import './App.css';
import AuthStore from './stores/AuthStore';
import { observer,  } from 'mobx-react';
import { Route, withRouter } from 'react-router';
import { Switch } from 'react-router-dom';

import LoginContainer from './containers/LoginContainer';
import LoginCallBackContainer from './containers/LoginCallBackContainer';

@observer
class App extends Component {
  componentWillMount () {
    console.log(this.props)
    if (AuthStore.token === null) {
      if (localStorage.getItem('token')) {
        AuthStore.setTokenFromLocalStorage();
      } else {
        this.props.history.push('/login')
      }
    }
  }

  render () {
    return (
      <Switch>
        <Route exact path={'/login'} component={ LoginContainer }/>
        <Route exact path={'/login-callback'} component={ LoginCallBackContainer }/>
      </Switch>
    );
  }
}

export default withRouter(App);
