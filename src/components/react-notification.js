import React, { Component } from 'react';
import { Notification } from 'react-notification';
import '../App.css';


export default class ReactNotification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }
  }

  toggleNotification() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const { isActive } = this.state;

    return (
      <div>
        <button
          onClick={this.toggleNotification.bind(this)}
          children={!isActive ? "Show notification" : "Hide notification"}
        />

        <Notification
          isActive={this.state.isActive}
          message="Added to your favorites. This is a super long notification with A LOT of text on it."
          action="Close"
          //title="Title!"
          style={false}
          //className="notification-bar"
          activeClassName="active animated bounceIn"
          dismissAfter={10000000}
          onDismiss={this.toggleNotification.bind(this)}
          onClick={() =>  this.setState({ isActive: false })}
        />
      </div>
    );
  }
}
