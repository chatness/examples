<script>
  	import ChatMessages from './ChatMessages.svelte'

	export let CURRENT_USER
	export let CURRENT_GROUPS

	// apply dark theme
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	uiToggleDark(prefersDark.matches);
	prefersDark.addListener((mediaQuery) => uiToggleDark(mediaQuery.matches));
	function uiToggleDark(shouldAdd) {
		document.body.classList.toggle('dark', shouldAdd);
	}
</script>

<main>
	<h2 class="outer">Hello {CURRENT_USER.name}!</h2>
	<ChatMessages bind:from={CURRENT_USER} bind:to={CURRENT_GROUPS[0]}></ChatMessages>
</main>



<svelte:head>
	<script type="text/javascript" src="https://static.chatness.app/js/elements.js"></script>
	<style>
		html, body {
			overflow-y: auto !important;
		}
		h2.outer {
			text-align: center;
			margin-top: 50px;
			display: block;
		}
		@media (prefers-color-scheme: dark) {
			h2.outer {
				color: #fff;
			}
		}
	</style>
</svelte:head>
