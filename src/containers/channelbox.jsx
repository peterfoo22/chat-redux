import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';



class ChannelBox extends Component{
  constructor(props){
      super(props)
  }

  render(){
    console.log(this.props)
    return (
      <div className = "listfochannelarea">List of Channels Here</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}


export default connect(mapStateToProps, null)(ChannelBox);
