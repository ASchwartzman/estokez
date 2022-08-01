// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAhist2pMaqRJ3JPZvrvIVkSBSF6Hyhwss',
  authDomain: 'estokez.firebaseapp.com',
  projectId: 'estokez',
  storageBucket: 'estokez.appspot.com',
  messagingSenderId: '100494688262',
  appId: '1:100494688262:web:6843fccfca480871b70387',
}

let app = null
{
  getApps().length === 0
    ? (app = initializeApp(firebaseConfig))
    : (app = getApp())
}
const db = getFirestore(app)
const auth = getAuth(app)

module.exports = {
  app,
  db,
  auth,
}
