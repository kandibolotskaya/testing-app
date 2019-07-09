import React from 'react';
import {
    MDBPopover,
    MDBPopoverBody,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdbreact';
import css from './style.module.css';


interface IProps {
    popoverId: string,
    plusIconSrc: string,
    text: string,
    percent: string
}

// interface CustomProps {
//     handleClick: (event: React.FormEvent<HTMLInputElement>) => void;
// }

interface IState {
    isPopoverVisible: boolean
}

const audienceLinks = ['launch', 'edit', 'share'];

// type Props = IProps & CustomProps;

class DashboardAudienceItem extends React.Component<IProps, IState> {

    state: IState={
        isPopoverVisible: false,
    }

    handleSelectMenuItem = (e: any) => {
        const value = e.currentTarget;
        // this.setState({isPopoverVisible: false});
        {console.log('********', this.state.isPopoverVisible)}
    }

    setVisibility = () => {
        {console.log('-----------', this.state.isPopoverVisible)}
        
    }

    handleCl=(e: any)=> {
        const val = e.currentTarget;
        console.log(val)
        this.setState({isPopoverVisible: false});
    }


  render(){
    return (
      <React.Fragment>
            <MDBPopover
                placement="bottom"
                popover
                clickable
                domElement
                id={this.props.popoverId}
                isVisible={this.state.isPopoverVisible}
                onChange={this.setVisibility}
            >
            <img alt="plus" src={this.props.plusIconSrc} />
            <div>
                <MDBPopoverBody className={css.audiencePopoverMenu} onClick={this.handleSelectMenuItem}>
                    <MDBListGroup className={css.listGroup}>
                        {audienceLinks.map(item => <MDBListGroupItem key={item} onClick={this.handleCl} value={`${item}`} href="#">{item}</MDBListGroupItem>)}
                    </MDBListGroup>
                </MDBPopoverBody>
            </div>
            </MDBPopover>
            <p className={css.audienceColumnInfoText}>{this.props.text}</p>
            <div className={css.audienceColumnInfoImg}>
                <h4>{this.props.percent}%</h4>
                <img alt='arrow_up' src='/assets/images/green_arrow.svg' />
            </div>
      </React.Fragment>
  );}
}

export default DashboardAudienceItem;