
const intialstate = {
  messages: [{
    "id": 1124,
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "id": 233,
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

export default function (state = intialstate, action) {

  switch (action.type) {
    case 'FETCH':  {
    let newArray = action.payload.map((element) => {
      element
    })
    console.log(action.payload)
    console.log(newArray)
      return state

    }
    case 'SEND': {
      return state;
    }
    case 'SELECTCHANNEL': {
      return Object.assign({}, state, {
        selectedChannel: action.payload
      })
    }
    default:
      return state;
  }
}
