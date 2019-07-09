import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import classNames from 'classnames';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Page, DashboardAudienceItem } from '../../components';
import css from './style.module.css';
import auth from '../../utils/Auth';


interface Props extends RouteComponentProps<any> {}

class Dashboard extends React.Component<Props> {
  componentDidMount(){
    if(!auth.isAuthenticated()){
      auth.login();
    }
  }
  
  render(){
    return (
      <Page>
          <div className={css.dashboardWrapper}>
            <div>
              <h1>dashboard</h1>
              <section className={css.searchSectionWrapper}>
                <div>
                  <p className={css.fieldsLabel}>destination url</p>
                  <MDBCard
                      className={css.cardWrapper}
                    >
                        <MDBCardBody
                          className={css.cardField}
                        >
                          <input
                            type="email"
                            id="exampleInput"
                            placeholder='enter your long url here'
                            className={classNames({
                              [css.searchInputField]: true,
                            })}
                          />
                        </MDBCardBody>
                    </MDBCard>
                    <div className={css.searchButtonWrapper}>
                      <div className={css.searchBtn}>
                        <MDBBtn
                          outline
                          color="light-blue"
                        >
                          short links
                        </MDBBtn>
                        <MDBIcon
                            icon="check-circle"
                            className={classNames({
                              [css.searchBtnIcon]: true,
                              ['pink-text']: true,
                            })}
                        />
                      </div>
                      <div className={css.searchBtn}>
                        <MDBBtn
                          outline
                          color="light-blue"
                        >
                          geo links
                        </MDBBtn>
                        <MDBIcon
                            icon="plus-circle"
                            className={classNames({
                              [css.searchBtnIcon]: true,
                              ['black-text']: true,
                            })}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className={css.fieldsLabel}>domains</p>
                    <MDBCard
                      className={css.cardWrapper}
                    >
                        <MDBCardBody
                          className={css.destinationUrl}
                        >
                          <p>found.ee</p>
                          <MDBIcon icon="arrow-down" size="sm"/>
                          <img alt="btn" className={css.shortenBtn} src='/assets/images/button_shorten.svg' />
                        </MDBCardBody>
                    </MDBCard>
                  </div>
              </section>
            </div>
            <div className={css.audienceSection}>
              <div>
                <h1>audience growth</h1>
                <h6 className={css.audienceInfo}>Double your audience</h6>
                <p className={css.audienceInfo}>for as little as $25.</p>
                <p className={css.audienceInfo}>
                  Launch ads now.
                  <img alt="arrow_launch" src='/assets/images/launch_arrow.svg' className={css.launch_arrow}/>
                </p>
              </div>
              <div>
                <MDBContainer className={css.audienceSectionWrapper}>
                  <MDBRow center>
                    <MDBCol>
                      <DashboardAudienceItem
                        popoverId='popper1'
                        plusIconSrc='/assets/images/cyan-plus.svg'
                        text='spotify listeners'
                        percent='357'
                      />
                    </MDBCol>
                    <MDBCol>
                      <DashboardAudienceItem
                        popoverId='popper2'
                        plusIconSrc='/assets/images/blue-plus.svg'
                        text='ticket buyers'
                        percent='315'
                      />
                    </MDBCol>
                    <MDBCol>
                      <DashboardAudienceItem
                        popoverId='popper3'
                        plusIconSrc='/assets/images/purple-plus.svg'
                        text='music purchasers'
                        percent='432'
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
              <div className={css.backgroundImg} />
            </div>
          </div>
      </Page>
  );
  }
}

export default withRouter(Dashboard);