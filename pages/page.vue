<template lang="pug">
.row.h-100.m-0
  .col-lg-6.col-md-9.d-flex.align-items-center
    .container
      form(@submit.prevent="login")
        .row
          .offset-sm-2.col-sm-8.col-md-8.mt-3.mb-3
            .form-group
              input.form-control(v-model='email', name='email' placeholder="Email" type='email', required autocomplete="email")
          .offset-sm-2.col-sm-8.col-md-8
            .form-group
              input.form-control(v-model='password', name='password' placeholder="Password" type='password', required='' minlength='6', maxlength='64' autocomplete="current-password")
          .offset-sm-2.col-sm-8.col-md-8.mt-3
            button.btn.btn-primary.mb-3.w-100(type='submit') Sign In
      button.btn.btn-primary.mb-3.w-100(@click="test") test
      button.btn.btn-primary.mb-3.w-100(@click="logout") logout
  .col-lg-6.col-md-3.col-0.d-none.d-md-flex.login-page
    img(:src="login_img")
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

import {definePageMeta, ref, useSupabaseClient, useSupabaseUser} from "#imports"
import login_img from "assets/img/login.svg"
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const auth = useSupabaseToken()

const email = ref("")
const password = ref("")

const login = () => {
  supabase.auth.signIn({email:email.value,password:password.value}).then(() => {
    console.log(auth.value)
  })
}

const test = () => {
  console.log(auth.value)
}

const logout = () => {
  supabase.auth.signOut()
}
</script>

<style lang="scss">
.login-page {
  //background: radial-gradient(
  //  ellipse at center,
  //  #5a93af 0%,
  //  $primary-color 100%
  //);
  //background-image: url("../assets/placeholder_cover.png");
  background-position: center;
  border-bottom-left-radius: 40px;
}
</style>

