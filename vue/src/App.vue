<template>
  <div>
    <h2 class="outer">Hello {{ from.name }}!</h2>
    <AppChatMessages :from="from" :to="to" />
  </div>
</template>

<script>
import AppChatMessages from './components/AppChatMessages.vue';

// apply dark theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
uiToggleDark(prefersDark.matches);
prefersDark.addListener((mediaQuery) => uiToggleDark(mediaQuery.matches));
function uiToggleDark(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}

export default {
  name: 'App',
  data() {
    return {
      from: {
        name: 'John Doe',
        objectId: '5EOJTH9nUzM526vKPSVrHzp2zFP2',
        email: 'john@doe.com',
      },
      to: {
        objectId: '4e1cda1f-4adf-2fce-f303-83f497ce25c9',
        name: 'Developers',
      },
    };
  },
  components: {
    AppChatMessages,
  },
};
</script>
