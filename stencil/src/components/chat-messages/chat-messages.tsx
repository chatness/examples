import { Component, h, Prop, Watch } from '@stencil/core';


@Component({
  tag: 'chat-messages',
  styleUrl: 'chat-messages.css',
  shadow: false,
  assetsDirs: ['svg', 'fonts']
})
export class ChatMessages {

  @Prop() from;
  @Prop() to;

  @Watch('from')
  didFromChange(from) {
    const messagesComponent:any = document.querySelector('chat-messages');
    messagesComponent.from = from;
  }

  @Watch('to')
  didToChange(to) {
    const messagesComponent:any = document.querySelector('chat-messages');
    messagesComponent.to = to;
  }

  render() {
      return (
       <chat-messages></chat-messages>
      );
  }
}
