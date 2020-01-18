// TODO: add and export your own actions

async function apiGetAll (channel) {
  try {
   const resp = await fetch("https://wagon-chat.herokuapp.com/${channel}/messages")
   const newResp = await somePromise(resp)

   return newResp
  } catch (err) {
  // all errors will be captured here for anything in the try block
   console.log(err)
   }
}

function fetchMessages(channel) {
  return {
    type: "FETCH",
    payload: apiGetAll(channel)
  };
}

function sendMessages(channel, author, content) {
  return {
    type: "SEND",
    payload: { channel, author, content }
  };
}

export { fetchMessages, sendMessages };
