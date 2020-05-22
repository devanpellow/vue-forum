<template>
  <div class="flex-grid justify-center">
    <div class="col-2">

      <form @submit.prevent="register" class="card card-form">
        <h1 class="text-center">Register</h1>

        <div class="form-group">
          <label for="name">Full Name</label>
          <input v-model="form.name" @blur="$v.form.name.$touch" id="name" type="text" class="form-input">
          <template v-if="$v.form.name.$error">
            <span class="error" v-if="!$v.form.name.required">This field is required</span>
          </template>
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="form.username" @blur="$v.form.username.$touch" id="username" type="text" class="form-input">
          <template v-if="$v.form.username.$error">
            <span class="error" v-if="!$v.form.username.required">This field is required</span>
            <span class="error" v-if="!$v.form.username.unique">Sorry! This username is already taken</span>
          </template>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model.lazy="form.email" @blur="$v.form.email.$touch" id="email" type="email" class="form-input">
          <template v-if="$v.form.email.$error">
            <span class="error" v-if="!$v.form.email.required">This field is required</span>
            <span class="error" v-if="!$v.form.email.unique">Sorry! This email is already taken</span>
          </template>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input v-model.lazy="form.password" @blur="$v.form.password.$touch" id="password" type="password" class="form-input">
          <template v-if="$v.form.password.$error">
            <span class="error" v-if="!$v.form.password.required">This field is required</span>
            <span class="error" v-if="!$v.form.password.minLength">The password must be at least 6 characters long</span>
          </template>
        </div>

        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input v-model="form.avatar" @blur="$v.form.avatar.$touch" id="avatar" type="text" class="form-input">
          <template>
            <span class="error" v-if="!$v.form.avatar.url">Please include a valid URL</span>
            <span class="error" v-if="!$v.form.avatar.$error">Please include an image URL ending with .jpg, .jpeg, .gif, .png, or .svg </span>
          </template>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-blue btn-block">Register</button>
        </div>

      </form>
      <div class="text-center push-top">
        <button @click="registerWithGoogle" class="btn-red btn-xsmall"><i class="fa fa-google fa-btn"></i>Sign up with Google</button>
      </div>
    </div>
  </div>
</template>

<script>
    import {required, url, email, minLength} from 'vuelidate/lib/validators'
    import {uniqueEmail, uniqueUsername, responseOk, supportedImageFile} from '@/utils/validators'
    export default {
      data () {
        return {
          form: {
            name: null,
            username: null,
            email: null,
            password: null,
            avatar: null
          }
        }
      },
      validations: {
        form: {
          name: {
            required
          },
          username: {
            required,
            unique: uniqueUsername
          },
          email: {
            required,
            email,
            unique: uniqueEmail
          },
          password: {
            required,
            minLength: minLength(6)
          },
          avatar: {
            url,
            supportedImageFile,
            responseOk
          }
        }
      },
      methods: {
        register () {
          this.$v.form.$touch()
          if (this.$v.form.$invalid) {
            return
          }
          this.$store.dispatch('auth/registerUserWithEmailAndPassword', this.form)
            .then(() => this.successRedirect())
        },
        registerWithGoogle () {
          this.$store.dispatch('auth/ignInWithGoogle')
            .then(() => this.successRedirect())
        },
        successRedirect () {
          const redirectTo = this.$route.query.redirectTo || {name: 'Home'}
          this.$router.push(redirectTo)
        }
      },
      created () {
        this.$emit('ready')
      }
    }
</script>

<style scoped>
.error {
  padding: 2px 2px;
  color: #cc0000;
  background-color: rgb(204,0,0,.1);
  border-radius: 5%;
}
</style>
