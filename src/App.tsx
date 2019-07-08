import React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Header, LeftSideBar, MainContent } from './components';
import css from './style.module.css';


interface Props extends RouteComponentProps<any> {}

class App extends React.Component<Props> {

  render(){
    return (
      <div>
        <Header />
        <main className={css.mainAppWrapper}>
          <section><LeftSideBar /></section>
          <section><MainContent /></section>
        </main>
      </div>
  );
  }
}

export default withRouter(App);
