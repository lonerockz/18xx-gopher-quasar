<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon
            name="account_circle"
            color="primary"
          />
        </template>
        {{ tab | titleCase }} to access your Todos anywhere!
      </q-banner>
    </div>
    <!-- <div class="row q-mb-md"> -->
    <!-- <q-input
        v-model="formData.email"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
        ref="email"
        lazy-rules
        outlined
        class="col"
        label="Email"
        stack-label />
    </div> -->
    <!-- <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters.']"
        ref="password"
        lazy-rules
        type="password"
        outlined
        class="col"
        label="Password"
        stack-label />
    </div> -->
    <div>
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.password.$error }"
      >
        <label class="form__label">Password</label>
        <q-input
          class="form__input"
          v-model.trim="$v.password.$model"
        />
      </div>
      <div
        class="error"
        v-if="!$v.password.required"
      >
        Password is required.
      </div>
      <div
        class="error"
        v-if="!$v.password.minLength"
      >
        Password must have at least {{ $v.password.$params.minLength.min }} letters.
      </div>
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.repeatPassword.$error }"
      >
        <label class="form__label">Repeat password</label>
        <q-input
          class="form__input"
          v-model.trim="$v.repeatPassword.$model"
        />
      </div>
      <div
        class="error"
        v-if="!$v.repeatPassword.sameAsPassword"
      >
        Passwords must be identical.
      </div>
    </div>
    <div class="row q-mb-md">
      <q-input
        outlined
        class="col"
        v-model.trim="email"
        label="Your Email..."
        stack-label
        @input="$v.email.$touch()"
        :rules="[
          val => $v.email.required || 'Email is required',
          val => $v.email.email || 'Invalid email format',
        ]"
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn
        color="primary"
        :label="tab"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  props: ['tab'],
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    // isValidEmailAddress (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   return re.test(String(email).toLowerCase())
    // },
    submitForm () {
      // this.$refs.email.validate()
      // this.$refs.password.validate()
      // if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
      if (!this.$v.email.$invalid && !this.$v.password.$invalid) {
        if (this.tab === 'login') {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
        }
      }
    }
  },
  filters: {
    titleCase (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  validations: {
    email: {
      required,
      email

    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  }
}
</script>
