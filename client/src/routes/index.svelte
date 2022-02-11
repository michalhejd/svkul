<script>
	import SlideBox from "../components/slideBox.svelte";
	import News from "../components/news.svelte";
	import AboutProject from "../components/aboutProject.svelte";
	import Contacts from "../components/contacts.svelte";
</script>

<main>
	<SlideBox/>
	<News/>
	<AboutProject/>
	<Contacts/>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>