import consumer from "channels/consumer"
import jquery from "jquery"
window.$ = jquery

const appChatRoom = consumer.subscriptions.create("ChatRoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.insertAdjacentHTML('beforeend', data['chat_message']);
    //return console.log(data['chat_message']);
  },

  speak: function(chat_message, chat_room_id) {
    return this.perform('speak', { chat_message: chat_message, chat_room_id: chat_room_id });
  },
});

if(/chat_rooms/.test(location.pathname)) {
  const textarea = document.getElementById('textarea');
	if (textarea) {
    let isComposing = false;
    // IMEの入力が開始されたときにフラグを立てる
    textarea.addEventListener('compositionstart', () => {
      isComposing = true;
    });
    // IMEの入力が確定されたときにフラグを下ろす
    textarea.addEventListener('compositionend', () => {
      isComposing = false;
    });
    textarea.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !isComposing && !event.shiftKey) {
        if (event.target.value){
					const chat_room_id = textarea.getAttribute('data-chat_room_id')
          appChatRoom.speak(event.target.value, chat_room_id);
          event.target.value = '';
          event.preventDefault();
        } else {
          alert("文字を入力してください！")
          event.target.value = '';
          event.preventDefault();
        }
      }
    });
  }
}