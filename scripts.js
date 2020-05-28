/**
playArea = document.querySelector('#playerAndPlaylistArea')
playList = playArea.querySelector('#playlistArea')
platerArea = playArea.querySelector('#playerArea')
roomChat = playArea.querySelector('#room-chat-holder')
 */

const playArea = document.querySelector('#playerAndPlaylistArea')
const playList = playArea.querySelector('#playlistArea')
const platerArea = playArea.querySelector('#playerArea')
const roomChat = playArea.querySelector('#room-chat-holder')

playList.remove()
roomChat.insertAdjacentElement('beforeend', playList)