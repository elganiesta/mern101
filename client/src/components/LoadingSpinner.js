import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';

class LoadingSpinner extends Component {
  
  render() { 
    const { loading } = this.props.items;
    if(loading) {
      return (
        <div className="spinner">
          <Spinner color="info" />
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

 
const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, {}) (LoadingSpinner);