import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const config = {
  apiKey: "AIzaSyAPc-fVS0JNEQs8AVbSQGXQM_-CvhFwIsk",
  authDomain: "puzzle-oasis.firebaseapp.com",
  projectId: "puzzle-oasis",
  storageBucket: "puzzle-oasis.firebasestorage.app",
  messagingSenderId: "1050379636128",
  appId: "1:1050379636128:web:181384350e3bd275e9e8c5",
  measurementId: "G-ZDCT2PV25H"
}

export default class FirebasApp {
  static instance = initializeApp(config)
  static analytics = getAnalytics()
}
