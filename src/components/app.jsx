import React from 'react';
import MessageList from '../containers/messagelist'
import MessageForm from '../containers/messageform'
const App = () => {
  return (
    <div className="app">
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
