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
    :global(p, h1, h2, h3, h4, h5, h6){
        color: black;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    :global(h1){
        font-size: 2em;
    }
</style>