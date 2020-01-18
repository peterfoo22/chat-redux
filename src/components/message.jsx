import React from 'react';
import ReactDOM from 'react-dom';

const Message = (props) => {
  return(
    <div>
        {props.username}: {props.message}
        ({props.createdat})
    </div>
  )
}

export default Message
