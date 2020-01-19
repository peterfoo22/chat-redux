import Message from '../components/message'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';



class MessageList extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.props.fetchMessages("channelparam")
    this.forceUpdate();
  }



  render(){
      return(
      <div className = "chatarea">
        {this.props.info.messages.map((message, index)=>
           <Message key = {index} username = {message.author} message = {message.content} createdat = {message.created_at}
          />
        )}
        <a onClick = {this.handleClick}>Click to Refresh</a>
      </div>

    )

  }
}



function mapStateToProps(state) {
  return {
    info: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchMessages}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
