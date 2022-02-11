<script>
    import NewsBox from "./news-box.svelte";
    import NewsLink from "./news-links.svelte"

</script>

<div class="news">

    <div class="news-container">
        <h1>Novinky</h1>
        <NewsBox/>
        <NewsBox/>
        <NewsBox/>
        <NewsBox/>
    </div>
    <div class="news-links-container">
        <h1>Odkazy</h1>
        <NewsLink/>
        <NewsLink/>
        <NewsLink/>
        <NewsLink/>
    </div>

</div>

<style>
    .news {
        display: flex;
        gap: 100px;
        width: 100%;
        padding: 40px;
        box-sizing: border-box;
    }

    .header {
        text-align: center;
        font-size: 35px;
        font-weight: 500;
    }
    .news-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 70%;
    }
    .news-links-container{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 30%;
    }
    
</style>
