<script>
	import Nav from "../components/nav.svelte"
	import SlideBox from "../components/slideBox.svelte"
	import News from "../components/news.svelte"
	import AboutProject from "../components/aboutProject.svelte";
</script>

<main>
	<Nav></Nav>
	<SlideBox></SlideBox>
	<News></News>
	<AboutProject></AboutProject>
</main>

<style>
	main{
		display: flex;
		flex-direction: column;
	}
</style>