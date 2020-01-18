import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessages, fetchMessages } from '../actions/index';

class MessageForm extends Component {
  constructor(props){
      super(props)
    }
  handleChange(event){
    console.log(event.target.value)
  }

  handleSubmit(){

  }

  render(){
    console.log(this.props)
    return(
        <form onSubmit = {this.handleSubmit}>
            <input onChange = {this.handleChange} type="text"/>
            <button  >Enter Message!</button>

          </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators( {sendMessages}, dispatch);
}


export default connect(null, mapDispatchToProps)(MessageForm);
