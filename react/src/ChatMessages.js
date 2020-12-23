import { useEffect } from 'react';

function ChatMessages(props) {
  useEffect(() => {
    const messagesComponent = document.querySelector('chat-messages');
    // set from and to
    messagesComponent.from = props.from;
    messagesComponent.to = props.to;
  });

  return <chat-messages />;
}

export default ChatMessages;
