import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessages, fetchMessages } from '../actions/index';

class MessageForm extends Component {
  constructor(props){
      super(props)

    this.state = {value:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(){
    this.props.sendMessages(this.props.thisChannel, this.props.author, this.state.value)
  }

  render(){
    return(

        <div className = "messagingarea">
            <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.handleChange} type="text"/>
                <button  >Enter Message!</button>

            </form>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    thisChannel: state.messages.selectedChannel,
    author: state.messages.currentUser
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators( {sendMessages}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
