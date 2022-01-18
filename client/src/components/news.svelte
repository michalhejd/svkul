<script>
    import NewsBox from "./newsBox.svelte"
</script>
<div class="news">
    <div class="wrap">
        <div class="header">Novinky</div>
        <div class="container">
            <NewsBox></NewsBox>
            <NewsBox></NewsBox>
            <NewsBox></NewsBox>
            <NewsBox></NewsBox>
        </div>
    </div>
</div>
<style>
    .news{
        width: 100%;
    }
    .wrap{
        display: flex;
        flex-direction: column;
        gap: 100px;
        margin: 75px;
    }
    .header{
        text-align: center;
        font-size: 35px;
        font-weight: 500;
    }
    .container{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
</style>