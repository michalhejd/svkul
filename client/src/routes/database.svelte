<script>
    import Filters from "../components/filters.svelte";

    let filters = {
        autori: [false],
        roky: [false],
        nakladatele: [false],
        mistaVydani: [false],
        id: [false]
    };

    function search(filters) {
        var query = new URLSearchParams();
        if(!filters.autori.includes(false)) filters.autori.forEach(t => query.append("autor[]", t));
        if(!filters.roky.includes(false)) filters.roky.forEach(t => query.append("rok[]", t));
        if(!filters.nakladatele.includes(false)) filters.nakladatele.forEach(t => query.append("nakladatel[]", t));
        if(!filters.mistaVydani.includes(false)) filters.mistaVydani.forEach(t => query.append("mistoVydani[]", t));
        if(!filters.id.includes(false)) filters.id.forEach(t => query.append("id[]", t));
        let str = query.toString().replace(/%5B%5D/g, "[]");
        console.log(query, str);
        return fetch("http://localhost:3001/data/search?" + str).then(res => res.json());
    }
</script>

<h1>Databáze pomůcek</h1>
<Filters bind:filters />

{#await search(filters)}
    Vyhledávání
{:then results}
    <div class="results">
        {#each results as result}
            <div class="result">
                <h3>{result.nazev}</h3>
                <div class="autor">- {result.autor || "Neznámý autor"}</div>
                {#if result.nakladatel}
                    <span class="nakladatel">{result.nakladatel}</span>
                {/if}
                <span class="rok">Rok: {result.rok || "Neznámý"}</span>
                {#if result.mistoVydani}
                    <div class="mistoVydani">{result.mistoVydani}</div>
                {/if}
                {#if result.signatura}
                    <div class="signatura">{result.signatura}</div>
                {/if}
                {#if result.id.length}
                    <div class="id">{result.id.join(", ")}</div>
                {/if}
                {#if result.isxn}
                    <div class="isxn">{result.isxn}</div>
                {/if}
            </div>
        {/each}
    </div>
{/await}

<style>
    h1 {
        padding-left: 15px;
    }

    .results {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 1rem;
        padding: 20px;
    }
    .result {
        border-radius: 15px;
        box-shadow: 0 0 5px 0 rgb(131, 131, 131);
        padding: 10px;
        transition: background .3s;
    }
    .result:hover {
        background: rgb(216, 216, 216);
        cursor: pointer;
    }
</style>