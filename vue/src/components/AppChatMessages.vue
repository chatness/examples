<template>
  <chat-messages></chat-messages>
</template>

<script>
export default {
  name: 'AppChatMessages',
  props: {
    from: Object,
    to: Object,
  },
  mounted() {
    const messagesComponent = document.querySelector('chat-messages');
    // set from and to
    messagesComponent.from = this.from;
    messagesComponent.to = this.to;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
