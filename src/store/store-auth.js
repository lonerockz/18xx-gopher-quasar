import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  loggedIn: false,
  user: null
}

const mutations = {
  UPDATE_USER (state, user) {
    state.user = user
  },
  setLoggedIn (state, value) {
    state.loggedIn = value
  }

}

const actions = {
  registerUser (state, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  loginUser (state, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  logoutUser () {
    console.log('logoutUser')
    firebaseAuth.signOut()
  },
  handleAuthStateChange ({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        commit('UPDATE_USER', user)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/')
      } else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth')
      }
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
