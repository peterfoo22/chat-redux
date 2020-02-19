
const intialstate = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

export default function (state = intialstate, action) {

  switch (action.type) {
    case 'FETCH':

    return action.payload

    case 'SEND': {
      return state;
    }
    case 'SELECTCHANNEL': {
      return []
    }
    default:
      return state;
  }
}
