// import React from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import css from './style.module.css';

// const Header: React.FC = () => {
//   return (
//       <MDBContainer fluid className={css.headerWrapper}>
//           <MDBRow between>
//                 <MDBCol middle size="4" className={css.logoWrapper}>
//                     <img className={css.logoImage} src='/assets/images/logo.png' />
//                 </MDBCol>
//                 <MDBCol middle size="4">
//                     <img className={css.iconImage} src='/assets/images/ee_icon.png' />
//                 </MDBCol>
//           </MDBRow>
//       </MDBContainer>
//   );
// }

// export default Header;

import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBNavbarToggler,
    MDBCollapse,
    NavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBHamburgerToggler
} from 'mdbreact';
import classNames from 'classnames';
import { links } from '../../constants';
import css from './style.module.css';

interface IProps {
    isVisibleBurgerMenu: boolean
}

interface IState {
    collapseID: string,
    collapse1: boolean
}

class Header extends React.Component<IProps, IState>{
    state: IState = {
        collapseID: '',
        collapse1: false
    }
    
    toggleCollapse = (collapseID: string) => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    toggleSingleCollapse = (collapse1: string) => () => {
        this.setState({
          ...this.state,
          collapse1: !this.state.collapse1
        });
    }

    handleMobileMenuChoose = () => {
        this.setState({
            ...this.state,
            collapse1: !this.state.collapse1
        });
    }

    render(){
        return (
            <MDBContainer fluid className={css.headerWrapper}>
            {/* // <div className={css.headerWrapper}> */}
                <MDBNavbar
                    className={classNames({
                        [css.navBarWrapper]: true,
                        [css.mobileMenu]: this.props.isVisibleBurgerMenu,
                    })}
                >
                    <MDBContainer className={css.navBarContainer}>
                    {/* <div className={css.navBarContainer}> */}
                        <MDBNavbarBrand className={css.logoWrapper}>
                            <img className={css.logoImage} src='/assets/images/logo.png' />
                            <img className={css.iconImage} src='/assets/images/ee_icon.png' />
                        </MDBNavbarBrand>
                        {
                            this.props.isVisibleBurgerMenu &&
                            <MDBHamburgerToggler id="navbarCollapse11" isOpen={this.state.collapse1} onClick={this.toggleSingleCollapse('collapse1')} />
                            // <MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger1.svg?color=6a1b9a" onClick={this.toggleCollapse('navbarCollapse11')} />
                        }
                        {/* <MDBCollapse id="navbarCollapse11" className={css.collapseField} isOpen={this.state.collapseID} navbar> */}
                        <MDBCollapse isOpen={this.state.collapse1} className={css.collapseField} navbar>
                            <NavbarNav left>
                                {Object.keys(links).map(item => (
                                    <MDBNavItem key={item}>
                                        <MDBNavLink to={`/${item}`} onClick={this.handleMobileMenuChoose}>{item}</MDBNavLink>
                                    </MDBNavItem>
                                ))}
                                <div className={css.changeBackgroundBtnWrapper}>
                                    <p>change background</p>
                                    <div>
                                        <img alt="change_background" src="/assets/images/Group564.svg" />
                                        <img alt="change_background" src="/assets/images/Group563.svg" />
                                    </div>
                                </div>
                            </NavbarNav>
                        </MDBCollapse>
                        {/* </div> */}
                    </MDBContainer>
                </MDBNavbar>
                {/* // </div> */}
            </MDBContainer>
        );
    }
}

export default Header;