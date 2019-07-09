import React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { debounce } from 'lodash';
import auth from './utils/Auth';
import { Header, LeftSideBar, MainContent } from './components';
import css from './style.module.css';


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
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillMount(){
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps: any){
    if(
      prevProps.location.pathname !== this.props.location.pathname &&
      this.props.location.pathname === '/dashboard' &&
      !auth.isAuthenticated()
    ){
      auth.login();
    }
  }

  render(){
    return (
      <div className={css.application}>
        <Header isVisibleBurgerMenu={this.state.isVisible} />
        <main className={css.mainAppWrapper}>
          {!this.state.isVisible && <section className={css.leftSideBarSection}><LeftSideBar /></section>}
          <section className={css.rightMainSection}><MainContent /></section>
        </main>
      </div>
  );
  }
}

export default withRouter(App);
