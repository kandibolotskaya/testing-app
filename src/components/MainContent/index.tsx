import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Dashboard, NotFound } from '../../containers';
import { links } from '../../constants';



const MainContent: React.FC = (prop) => {
    return (
    <Switch>
        <Route path="/dashboard" render={() => <div>Dashboard</div>}/>
        <Route path="/links" render={() => <div>Links</div>}/>
        <Route path="/pages" render={() => <div>pages</div>}/>
        <Route path="/embeds" render={() => <div>embeds</div>}/>
        <Route path="/bulks" render={() => <div>bulks</div>}/>
        <Route path="/audiences" render={() => <div>audiences</div>}/>
        <Route path="/advertising" render={() => <div>advertising</div>}/>
        <Route path="/reporting" render={() => <div>reporting</div>}/>
        <Route path='/not_found' component={NotFound} />
        <Route exact path="/" render={() => (
            <Redirect to="/links"/>
        )}/>
    </Switch>
  );
}

export default MainContent;