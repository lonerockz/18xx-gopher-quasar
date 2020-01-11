import firebaseConfig from '../../firebaseConfig'

import * as firebase from 'firebase/app'

import 'firebase/auth'
// import 'firebase/firebase-auth'
// import 'firebase/firebase-firestore'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()

export { firebaseAuth }
