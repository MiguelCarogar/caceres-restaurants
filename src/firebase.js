import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: 'AIzaSyDxkMOGA3egxqE_F3KK03XhDjlsLeWOpgk',
  authDomain: 'restaurantes-caceres.firebaseapp.com',
  databaseURL: 'https://restaurantes-caceres.firebaseio.com',
  projectId: 'restaurantes-caceres',
  storageBucket: 'restaurantes-caceres.appspot.com',
  messagingSenderId: '70217277650'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
