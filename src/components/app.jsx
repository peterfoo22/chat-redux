import React from 'react';
import MessageList from '../containers/messagelist';
import MessageForm from '../containers/messageform';
import ChannelBox from '../containers/channelbox';

const App = () => {
  return (
      <div className="app">
        <ChannelBox />
        <MessageForm />
        <MessageList />
      </div>
  );
};

export default App;

