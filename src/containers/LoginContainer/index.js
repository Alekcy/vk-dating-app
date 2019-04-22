import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {
  Grid,
  Button,
} from '@material-ui/core';
import AuthStore from '../../stores/AuthStore';

@observer
class LoginContainer extends Component {

  onLoginButtonClick () {
    AuthStore.login();
  };

  render () {
    return (
      <Grid
        container
        className='main-container'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Button
            color='primary'
            variant='contained'
            onClick={this.onLoginButtonClick}
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default LoginContainer;
