<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 500px;
  background-color: white;
  display: flex;
  .contact-content {
    width: 60%;
    padding: 30px;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: var(--base-color);
    form {
      font-family: "Open Sans", sans-serif;
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: white;
      >div{
      display: flex;
      gap: 5px;
      }
      input {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        padding: 10px;
        border: 0;
        outline: 0;
        background-color: black;
        border-radius: 5px;
        color: white;
      }
      input[type="submit"] {
        width: 100%;
        cursor: pointer;
      }
      input[type=submit]:disabled {
        cursor: not-allowed;
        background-color: rgb(65, 65, 65);
      }
      textarea {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        height: 150px;
        resize: none;
        border: 0;
        outline: 0;
        background-color: black;
        border-radius: 5px;
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 12px;
        padding-bottom: 12px;
      }
      input[type=checkbox]{
      display: flex;
      }
      label {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        display: flex;
        color: black;
      }
    }
  }
}
@media only screen and (max-width: 875px){
  .contact{
    background-color: #f5f5f5;
    height: auto;
    flex-direction: column;
    .contact-content{
      width: 100%;
      padding: 0;
    }
    .form{
      width: 100%;
      padding: 30px 0;
      form{
        max-width: 400px;
        
      }
    }
  }
}
</style>
<template>
  <div class="contact" id="contacts">
    <div class="contact-content">
    <h2>Kontakty</h2>
    </div>
    <div class="form">
      <form action="">
        <input type="email" name="" id="" placeholder="email" v-model="email" />
        <input type="text" name="" id="" placeholder="jméno a příjmení" v-model="name" />
        <textarea name="" id="" placeholder="zpráva" v-model="message"></textarea>
        <div>
         <input type="checkbox" name="" id="checkbox" value="checkbox" v-model="checked" />
        <label for="checkbox"
          >Souhlasím s případným zveřejněním tohoto zanonymizovaného příspěvku na tyto webové
          stránky!</label
        >
        </div>
        <input :disabled="disabled" type="submit" value="Odeslat!" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      checked: false,
      name:'',
      email:'',
      message:''
    };
  },
  computed: {
    disabled() {
      if(this.checked == false || this.name == '' || this.email == '' || this.message == ''){
        
        return true;
      }
      else{
        
        return false;
      }
    }
  },
};
</script>