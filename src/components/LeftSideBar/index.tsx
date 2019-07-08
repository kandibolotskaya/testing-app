import React from 'react';
import { MDBCard, MDBCardBody } from 'mdbreact';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { links } from '../../constants';
import css from './style.module.css';

interface Props extends RouteComponentProps<any> {}

const LeftSideBar: React.FC<Props> = (props) => {

  return (
    <div>
      {console.log(props)}
        {Object.keys(links).map(item => (
            <NavLink key={item} to={`/${item}`}>
              <MDBCard className={css.cardWrapper}>
                  <MDBCardBody className={css.menuName}>{item}</MDBCardBody>
              </MDBCard>
            </NavLink>
        ))}
    </div>
  );
}

export default withRouter(LeftSideBar);