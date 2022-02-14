<script lang="ts">
    export let nazev;
    export let autor;
    </script>
    <div class="database-box">
        <img src="../../../static/karlakocka.jpg" alt="">
        <h2>{nazev}</h2>
        <p>{autor}</p>
    </div>
    <style>
        .database-box{
            border: 1px solid #e9e9e9;
            box-sizing: border-box;
            padding: 10px;
            border-radius: 5px;
            background-color: white;
        }
        img{
            width: 100%;
        }
    </style>