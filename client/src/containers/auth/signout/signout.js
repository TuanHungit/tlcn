import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreator from '../../../store/actions';
import alertify from 'alertifyjs';
class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
    alertify.success('You have logged out!');
  }
  render() {
    return <Redirect to='/' />;
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionCreator.Logout()),
  };
};
export default connect(null, mapDispathToProps)(Logout);
