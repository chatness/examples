<script>
	import { onMount } from 'svelte';

	export let from;
    export let to;

	onMount(() => {
	  const messagesComponent = document.querySelector('chat-messages');
      // set from and to
      messagesComponent.from = from;
      messagesComponent.to = to;
	});
</script>

<main>
	<chat-messages></chat-messages>
</main>

<style>
</style>