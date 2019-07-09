import auth0 from 'auth0-js';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
        clientID: `${process.env.REACT_APP_CLIENT_ID}`,
        redirectUri: `${process.env.REACT_APP_CALLBACK}`,
        audience: `${process.env.REACT_APP_AUDIENCE}`,
        responseType: 'token id_token',
        scope: 'openid',
    });

    constructor(){
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login(){
        this.auth0.authorize();
    }

    handleAuthentication(){
        this.auth0.parseHash((err, authResults) => {
            if(
                authResults &&
                authResults.accessToken &&
                authResults.idToken &&
                authResults.expiresIn
            ) {
                let expiresAt =
                    JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem('access_token', authResults.accessToken);
                localStorage.setItem('id_token', authResults.idToken);
                localStorage.setItem('expires_at', expiresAt);
                window.location.replace('/dashboard');
            } else if(!!err){
                console.log(err);
                window.location.replace('/not_found');
            }
        });
    }

    isAuthenticated(){
        let expiresAt = JSON.parse(localStorage.getItem('expires_at')!);
        return new Date().getTime() < expiresAt;
    }
}

export default new Auth();