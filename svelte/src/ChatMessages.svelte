<script>
	import { onMount } from 'svelte';

	export let from;
    export let to;

	onMount(() => {
	  const messagesComponent = document.querySelector('chat-messages');
      // set from
      messagesComponent.from = from;
      messagesComponent.to = to;

      console.log(from, to)
	});
</script>

<main>
	<chat-messages></chat-messages>
</main>

<style>
</style>