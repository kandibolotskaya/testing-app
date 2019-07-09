import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Dashboard, NotFound } from '../../containers';
import { Callback } from '..';
import auth from '../../utils/Auth';



const MainContent: React.FC = () => {
    return (
        <Switch>
            <Route path="/dashboard" render={
                () => {
                    if(auth.isAuthenticated()) {
                        return <Dashboard />
                    } else {
                        return <Redirect to="/not_found"/>
                    }
                }
            }/>
            <Route path="/links" render={() => <div>Links</div>}/>
            <Route path="/pages" render={() => <div>pages</div>}/>
            <Route path="/embeds" render={() => <div>embeds</div>}/>
            <Route path="/bulks" render={() => <div>bulks</div>}/>
            <Route path="/audiences" render={() => <div>audiences</div>}/>
            <Route path="/advertising" render={() => <div>advertising</div>}/>
            <Route path="/reporting" render={() => <div>reporting</div>}/>
            <Route exact path="/" render={() => (
                <Redirect to="/links"/>
            )}/>
            <Route path='/callback' component={Callback} />
            <Route path='*' component={NotFound} />
        </Switch>
    );
}

export default MainContent;