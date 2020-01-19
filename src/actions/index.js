// TODO: add and export your own actions

function apiGetMessagesChannel (channel) {
  const messageData = []
  fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
  .then(response => response.json())
  .then((data) => {
    data.messages.forEach((message) => messageData.push(message) )
  });
  return messageData
}

const body = {author: "authorparam", content: "contentparam", channelparm: "channelparam"}
  const promise = fetch(`https://wagon-chat.herokuapp.com/channelparam/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

function fetchMessages(channel) {
  return {
    type: "FETCH",
    payload: apiGetMessagesChannel("channelparam")
  };
}

function sendMessages(channelparam, authorparam, contentparam) {
  const body = {author: "authorparam", content: "contentparam", channelparm: "channelparam"}
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channelparam}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: "SEND",
    payload:  apiGetMessagesChannel(channelparam)
  };
}

function selectChannel(channel){
  return{
    type:"SELECTCHANNEL",
    payload: channel
  }
}

export { fetchMessages, sendMessages, selectChannel };
