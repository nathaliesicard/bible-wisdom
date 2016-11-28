import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';



export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

    //http://www.material-ui.com/#/components/snackbar
    const styles = {
      messageStyle: {color: '#441F4B'},
      bodyStyle: {backgroundColor: 'red'},
      style: {
        top: 0,
        bottom: 'auto',
        transform: this.state.open ?
          'translate3d(-50%, 0, 0)' :
          `translate3d(-50%, -50px, 0)`
      }
    };

    return (
      <div>
      <MuiThemeProvider>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Material UI"
        />
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Snackbar
          open={this.state.open}
          message="Added to your favorites"
          autoHideDuration={400000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={styles.bodyStyle}
          style={styles.style}
        />
      </MuiThemeProvider>
      </div>

    );
  }
}