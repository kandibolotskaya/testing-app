import React from 'react';
import auth from '../../utils/Auth';



class Login extends React.Component {
    componentDidMount(){
        auth.login();
    }

  render(){
    return (
      <div>
          <p>LogIn</p>
      </div>
  );
  }
}

export default Login;