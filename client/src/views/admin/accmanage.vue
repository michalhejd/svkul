<style lang="scss" scoped>

</style>
<template>
    <div class="accmanage">
        <template v-for="user in users">
            <div class="user" :key="user._id">
                <p>{{user.name}}</p>
            </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
    return{
        users: undefined
    }
},
    mounted() {
        axios.get("/users").then(response => {
            this.users = response.data;
        });
    },
}
</script>