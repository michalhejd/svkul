<style lang="scss" scoped>
.admin {
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    width: 250px;
    form {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-direction: column;
      input[type="email"],
      input[type="password"] {
          width: 100%;
        padding: 6px;
        border: 1px solid rgb(107, 107, 107);
        border-radius: 5px;
        outline: none;
      }
      input[type="submit"] {
          margin-top: 10px;
        width: 70%;
        height: 30px;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
        background-color: var(--base-color)
      }
    }
  }
  .account{
    width: 100%;
    display: flex;
    min-height: calc(100vh - 65px);
    nav{
      display: flex;
      flex-direction: column;
      width: 300px;
      min-height: 100%;
      background-color: #d9f2fa;
      border-top: 3px solid rgb(255, 255, 255);
      > a, .logout{
        text-decoration: none;
        cursor: pointer;
        color: black;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 18px;
        padding: 10px;
        border-bottom: 1px solid rgb(255, 255, 255);
        &:hover{
          background-color: rgb(246, 254, 255);
        }
      }
      .router-link-active{
        background-color: rgb(199, 219, 236);
      }
    }
  }
}
</style>
<template>
  <div class="admin" >
    <div class="wrap" v-if="logged != true">
      <form v-on:submit.prevent="login">
        <input type="email" placeholder="email" v-model="email" />
        <input
          type="password"
          placeholder="password"
          name=""
          id=""
          v-model="password"
        />
        <input type="submit" value="login" />
      </form>
    </div>
    <div class="account">
      <nav>
        <router-link to="/admin/ucet">Můj účet</router-link>
        <router-link to="/admin/sprava">Správa účtů</router-link>
        <router-link to="/admin/pomucky">Správa pomůcek</router-link>
        <router-link to="/admin/eventy">Eventy</router-link>
        <div class="logout">Odhlásit se</div>
      </nav>
      <div class="main"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
      login(){

      }
  },
  computed: {
    logged() {
      return this.$store.state.logged;
    }
  },
};
</script>