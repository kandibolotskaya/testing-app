import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import auth from '../../utils/Auth';

interface Props extends RouteComponentProps<any> {}


class Callback extends React.Component<Props> {
  componentDidMount(){
      auth.handleAuthentication();
  }

  render(){
    return (
      <div>
          Loading...
      </div>
  );
  }
}

export default withRouter(Callback);