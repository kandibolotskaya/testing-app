import React from 'react';
import { MDBCard, MDBCardBody } from 'mdbreact';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import { links } from '../../constants';
import css from './style.module.css';

interface Props extends RouteComponentProps<any> {}

const LeftSideBar: React.FC<Props> = (props) => {

  return (
    <div>
        {Object.keys(links).map(item => (
            <NavLink key={item} to={`/${item}`}>
              <MDBCard
                className={classNames({
                    [css.cardWrapper]: true,
                    [css.activeTab]: props.location.pathname.slice(1) === item,
                })}
              >
                  <MDBCardBody
                    className={css.menuName}
                  >
                    {item}
                  </MDBCardBody>
              </MDBCard>
            </NavLink>
        ))}
        <div className={css.changeBackgroundBtnWrapper}>
          <p>change background</p>
          <div>
            <img alt="change_background" src="/assets/images/Group564.svg" />
            <img alt="change_background" src="/assets/images/Group563.svg" />
          </div>
        </div>
    </div>
  );
}

export default withRouter(LeftSideBar);