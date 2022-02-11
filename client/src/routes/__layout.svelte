<script lang="ts">
	import Nav from "../components/nav.svelte"
</script>

<Nav></Nav>
<slot />

<style>
    :global(body) {
        padding: 0;
        margin: 0;
		font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>