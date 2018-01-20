import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  hideModal
} from '../../redux/actions';

import './Modal.css';

class Modal extends Component {

  hideModal = (event) => {
    
    event.stopPropagation();

    if (this.props.config.preventDefault !== true){

      if (event.target.dataset.closeTarget === 'true') {
        this.props.hideModal();      
      }
    
    }

  }

  displayModalHead = () => {

    const modal = this.props.config;

    const centerHeadText = true;
    const hideCloseIcon = true;

    const jsx = [];

    if (modal.headless !== true) {

      const classname_ModalBox__Text = 'ModalBox__text' + (centerHeadText ? ' ModalBox__text--centered' : '');

      jsx.push(
        <div className="ModalBox__head" data-text-centered={ centerHeadText } data-closeIcon-hidden={ hideCloseIcon } >
          <div className="ModalBox__text">
            {
              (() => {
                
                const jsx = [];

                if (modal.title !== undefined)
                  jsx.push(<div className="ModalBox__title">{ modal.title }</div>);
                  
                if (modal.subtitle !== undefined)
                  jsx.push(<div className="ModalBox__subtitle">{ modal.subtitle }</div>);

                return jsx;

              })()
            }
          </div>
          <div className="ModalBox__closeIcon" data-close-target='true' onClick={ this.hideModal }></div>
        </div>
      );

    }

    return jsx;

  }

  render() {

    const modal = this.props.config;

    const className = "Modal" + ((!this.props.visible) ? ' Modal--hidden' : '');

    return (
      <div className={ className } data-close-target='true' onClick={ this.hideModal } >
        <div className="ModalBox">

          { this.displayModalHead() }

          <div className="ModalBox__body">{ modal.body }</div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state.modal;
};

const mapDispatchToProps = {
  hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);