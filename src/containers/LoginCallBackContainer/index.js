import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Route, withRouter } from 'react-router';

import AuthStore from '../../stores/AuthStore';

@observer
class LoginCallBackContainer extends Component {

  componentDidMount () {
    if (this.props.location && this.props.location.hash
     && this.props.location.hash.match(/access_token/i) !== -1) {
      let matches = this.props.location.hash.match(new RegExp('access_token=([^&]*)'));
      if (matches[1]) {
        AuthStore.setToken(matches[1]);
        this.props.history.push('/');
      }
    }
  }

  render () {
    return null;
  }
}

export default withRouter(LoginCallBackContainer);
