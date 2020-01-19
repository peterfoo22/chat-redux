import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectChannel} from '../actions';



class ChannelBox extends Component{
  constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this);
}

  handleClick(event){
    this.props.selectChannel(event.target.innerHTML)
  }

  render(){
    console.log(this.props.channels)
    return (
      <div>
          { this.props.channels.map((channel, key) => {
             return  <a key = {key}> <p key ={key} onClick = {this.handleClick}>{channel} </p></a>}

          )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channels: state.messages.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectChannel}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelBox);
