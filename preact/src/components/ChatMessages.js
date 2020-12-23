import { useEffect } from 'preact/hooks';

const ChatMessages = (props) => {
  useEffect(() => {
    const messagesComponent = document.querySelector('chat-messages');
    // set from and to
    messagesComponent.from = props.from;
    messagesComponent.to = props.to;
  });

  return <chat-messages></chat-messages>;
};

export default ChatMessages;
