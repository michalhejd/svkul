<script lang="ts">
    function getOptions() {
        return fetch("http://localhost:3001/data/searchOptions").then(res => res.json())
    }

    export var filters = {
        autori: [false],
        roky: [false],
        nakladatele: [false],
        mistaVydani: [false],
        id: [false]
    };
</script>
<div class="filters">
{#await getOptions()}
    Načítání...
{:then options}
    <div class="container">
        <section>
        <select multiple bind:value={filters.autori}>
            <option value={false}>Jakýkoliv autor</option>
            <optgroup label="Autoři">
                {#each options.autori.filter(t => !!t) as autor}
                    <option value={autor}>{autor}</option>
                {/each}
                <option value="">Nespecifikováno</option>
            </optgroup>
        </select>
    </section>
    <section>
        <select multiple bind:value={filters.roky}>
            <option value={false}>Jakýkoliv rok vydání</option>
            <optgroup label="Léta vydání">
                {#each options.roky.filter(t => !!t) as rok}
                    <option value={rok}>{rok}</option>
                {/each}
                <option value={null}>Nespecifikováno</option>
            </optgroup>
        </select>
    </section>
    <section>
        <select multiple bind:value={filters.autori}>
            <option value={false}>Jakýkoliv nakladatel</option>
            <optgroup label="Nakladatalé">
                {#each options.nakladatele.filter(t => !!t) as nakladatel}
                    <option value={nakladatel}>{nakladatel}</option>
                {/each}
                <option value="">Nespecifikováno</option>
            </optgroup>
        </select>
    </section>
    <section>
        <select multiple bind:value={filters.mistaVydani}>
            <option value={false}>Jakékoliv místo výdání</option>
            <optgroup label="Místa vydání">
                {#each options.mistaVydani.filter(t => !!t) as mistoVydani}
                    <option value={mistoVydani}>{mistoVydani}</option>
                {/each}
                <option value="">Nespecifikováno</option>
            </optgroup>
        </select>
    </section>
    <section>
        <select multiple bind:value={filters.id}>
            <option value={false}>Jakýkoliv typ</option>
            <optgroup label="Typy">
                {#each options.id.filter(t => !!t) as id}
                    <option value={id}>{id}</option>
                {/each}
            </optgroup>
        </select>
    </section>
    </div>
    
{:catch e}
    Nastala chyba :C
{/await}
</div>
<style>
    .filters{
        border: 1px solid #e9e9e9;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top: 0;
        width: 100%;
        background-color: white;
    }
    .container{
display: flex;
flex-direction: column;
gap: 10px;

    }
</style>