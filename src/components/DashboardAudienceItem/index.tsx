import React from 'react';
import {
    MDBPopoverBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBPopper
  } from 'mdbreact';
import css from './style.module.css';


interface IProps {
    popoverId: string,
    plusIconSrc: string,
    text: string,
    percent: string
}

interface IState {
    isVisible: boolean,
    selectedItem: string
}

const audienceLinks = ['launch', 'edit', 'share'];


class DashboardAudienceItem extends React.Component<IProps, IState> {

    state: IState={
        isVisible: false,
        selectedItem: ''
    }


    handleChooseItem=(e: any)=> {
        const value = e.currentTarget.getAttribute('value');
        this.setState({
            isVisible: true,
            selectedItem: value
        });
    }


  render(){
    return (
      <React.Fragment>
            <MDBPopper
                placement="bottom"
                popover
                clickable
                domElement
                id={this.props.popoverId}
                isVisible={this.state.isVisible}
            >
            <img alt="plus" src={this.props.plusIconSrc} />
            <div>
                <MDBPopoverBody className={css.audiencePopoverMenu}>
                    <MDBListGroup className={css.listGroup}>
                        {audienceLinks.map(item => <MDBListGroupItem key={item} onClick={this.handleChooseItem} value={`${item}`} href="#">{item}</MDBListGroupItem>)}
                    </MDBListGroup>
                </MDBPopoverBody>
            </div>
            </MDBPopper>
            <p className={css.audienceColumnInfoText}>{this.props.text}</p>
            <div className={css.audienceColumnInfoImg}>
                <h4>{this.props.percent}%</h4>
                <img alt='arrow_up' src='/assets/images/green_arrow.svg' />
            </div>
      </React.Fragment>
  );}
}

export default DashboardAudienceItem;