<style lang="scss">

.navigation{
box-sizing: border-box;
padding-right: 15px;
width: 100%;
height: 65px;
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
background-color: var(--base-color);
a{
color: black;
text-decoration: none;
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 18px;
}
}
</style>
<template>
    <div class="navigation">
    <router-link to="">Domů</router-link>
    <router-link to="">Databáze pomůcek</router-link>
    <router-link to="">Kontakty</router-link>
    </div>
</template>
<script>
export default {
    name: "navigation"
}
</script>