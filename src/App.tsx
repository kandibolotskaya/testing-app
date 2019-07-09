import React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { debounce } from 'lodash';
import { Header, LeftSideBar, MainContent } from './components';
import css from './style.module.css';


// interface Props extends RouteComponentProps<any> {}

// class App extends React.Component<Props> {

//   render(){
//     return (
//       <div>
//         <Header />
//         <main className={css.mainAppWrapper}>
//           <section><LeftSideBar /></section>
//           <section><MainContent /></section>
//         </main>
//       </div>
//   );
//   }
// }

// export default withRouter(App);

interface Props extends RouteComponentProps<any> {}

interface IState {
  isVisible: boolean
}

class App extends React.Component<Props, IState> {

  state: IState = {
    isVisible: false
  }

  handleResize = debounce(() => {
    const isSmallScreen = window.matchMedia('(max-width: 960px)').matches;
    if (isSmallScreen) {
        return this.setState({isVisible: true});
    }

    return this.setState({isVisible: false});
  }, 100);

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }

  componentWillMount(){
    window.removeEventListener('resize', this.handleResize);
  }

  //Qwerty123
  render(){
    return (
      <div className={css.application}>
        <Header isVisibleBurgerMenu={this.state.isVisible} />
        <main className={css.mainAppWrapper}>
          {!this.state.isVisible && <section><LeftSideBar /></section>}
          <section><MainContent /></section>
        </main>
        <div className={css.backgroundImg} />
      </div>
  );
  }
}

export default withRouter(App);
