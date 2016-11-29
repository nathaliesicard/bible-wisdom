import React, { Component } from 'react';
import {ToastContainer, ToastMessage} from 'react-toastr'
/* TODO: Install Animate.CSS */
import '../../node_modules/animate.css/animate.css';
import '../toastr.min.css';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class Toastr extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  addAlert = this.addAlert.bind(this);
  clearAlert = this.clearAlert.bind(this);

  addAlert() {
    this.refs.container.success(`Today is ${new Date()}`, `Hello`, {
      closeButton: true,
      timeOut: 300000,
    });
  }

  clearAlert() {
    this.refs.container.clear();
  }

  render() {
    return (
      <div>
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-top-right"
        />

        <div className="btn-container">
          <button className="primary" onClick={this.addAlert}>
            React-Toastr
          </button>
          <button className="primary" onClick={this.clearAlert}>
            CLEAR
          </button>
        </div>
      </div>
    );
  }
}
