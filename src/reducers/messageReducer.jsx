
const intialstate = {
  messages: [{
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

export default function (state = intialstate, action) {
  console.log(action.payload)
  switch (action.type) {
    case 'FETCH': {
      return state;
    }
    case 'SEND': {
      return state;
    }
    default:
      return state;
  }
}
