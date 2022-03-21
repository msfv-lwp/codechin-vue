<template>
  <div class="row align-items-center">
    <div class="col col-xl-7 m-auto">
      <div id="register">
        <input
          type="name"
          v-model="name"
          placeholder="نام"
          class="form-register"
        />
        <input
          type="email"
          v-model="email"
          placeholder="ایمیل"
          class="form-register"
        />
        <input
          type="password"
          v-model="password"
          placeholder="رمز عبور"
          class="form-register"
        />
        <input
          type="password"
          v-model="password_confirmation"
          placeholder="تکرار رمز عبور"
          class="form-register"
        />
        <button type="submit" v-on:click="register()" class="btn-registerForm">
          ثبـت نــام
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";
export default {
  el: "#register",
  data: function () {
        return {
            token : '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:8000/api/brc1/code/token/")
  //     .then((response) => {
  //       this.token = response.data;
  //     });
  // },
  methods: {
    register() {
      axios
        .post("http://localhost:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then((response) => {
          console.log(response.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>