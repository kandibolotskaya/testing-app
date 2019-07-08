import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBPopover,
  MDBPopoverBody,
  MDBListGroup,
  MDBListGroupItem
} from 'mdbreact';
import classNames from 'classnames';
import { Page } from '../../components';
import css from './style.module.css';

class Dashboard extends React.Component {
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
                              ['form-control']: true,
                            })}
                          />
                        </MDBCardBody>
                    </MDBCard>
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
                  <MDBBtn outline color="light-blue">
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
                      <MDBPopover
                        placement="bottom"
                        popover
                        clickable
                        domElement
                        id="popper1"
                      >
                        <img alt="plus" src='/assets/images/cyan-plus.svg' />
                        <div>
                          <MDBPopoverBody className={css.audiencePopoverMenu}>
                              <MDBListGroup>
                                <MDBListGroupItem href="#">launch</MDBListGroupItem>
                                <MDBListGroupItem href="#">edit</MDBListGroupItem>
                                <MDBListGroupItem href="#">share</MDBListGroupItem>
                              </MDBListGroup>
                          </MDBPopoverBody>
                        </div>
                      </MDBPopover>
                      <p className={css.audienceColumnInfoText}>spotify listeners</p>
                      <div className={css.audienceColumnInfoImg}>
                        <h4>357%</h4>
                        <img alt='arrow_up' src='/assets/images/green_arrow.svg' />
                      </div>
                    </MDBCol>
                    <MDBCol>
                    <MDBPopover
                        placement="bottom"
                        popover
                        clickable
                        domElement
                        id="popper2"
                      >
                        <img alt="plus" src='/assets/images/blue-plus.svg' />
                        <div>
                          <MDBPopoverBody className={css.audiencePopoverMenu}>
                              <MDBListGroup>
                                <MDBListGroupItem href="#">launch</MDBListGroupItem>
                                <MDBListGroupItem href="#">edit</MDBListGroupItem>
                                <MDBListGroupItem href="#">share</MDBListGroupItem>
                              </MDBListGroup>
                          </MDBPopoverBody>
                        </div>
                      </MDBPopover>
                      <p className={css.audienceColumnInfoText}>ticket buyers</p>
                      <div className={css.audienceColumnInfoImg}>
                        <h4>315%</h4>
                        <img alt='arrow_up' src='/assets/images/green_arrow.svg' />
                      </div>
                    </MDBCol>
                    <MDBCol>
                    <MDBPopover
                        placement="bottom"
                        popover
                        clickable
                        domElement
                        id="popper3"
                        className={css.audiencePopoverWrapper}
                      >
                        <img alt="plus" src='/assets/images/purple-plus.svg' />
                        <div>
                          <MDBPopoverBody className={css.audiencePopoverMenu}>
                              <MDBListGroup>
                                <MDBListGroupItem href="#" hover>launch</MDBListGroupItem>
                                <MDBListGroupItem href="#" hover>edit</MDBListGroupItem>
                                <MDBListGroupItem href="#" hover>share</MDBListGroupItem>
                              </MDBListGroup>
                          </MDBPopoverBody>
                        </div>
                      </MDBPopover>
                      <p className={css.audienceColumnInfoText}>music purchasers</p>
                      <div className={css.audienceColumnInfoImg}>
                        <h4>432%</h4>
                        <img alt='arrow_up' src='/assets/images/green_arrow.svg' />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </div>
          </div>
      </Page>
  );
  }
}

export default Dashboard;