import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import css from './style.module.css';

const Header: React.FC = () => {
  return (
      <MDBContainer fluid className={css.headerWrapper}>
          <MDBRow between>
                <MDBCol middle size="4" className={css.logoWrapper}>
                    <img className={css.logoImage} src='/assets/images/logo.png' />
                </MDBCol>
                <MDBCol middle size="4">
                    <img className={css.iconImage} src='/assets/images/ee_icon.png' />
                </MDBCol>
          </MDBRow>
      </MDBContainer>
  );
}

export default Header;