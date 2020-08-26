import * as firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyD4_tvbrmIfUpkEu97g14l7Z4-ybSj5X1I",
    authDomain: "todo-test-bec8a.firebaseapp.com",
    databaseURL: "https://todo-test-bec8a.firebaseio.com",
    projectId: "todo-test-bec8a",
    storageBucket: "todo-test-bec8a.appspot.com",
    messagingSenderId: "483343130388",
    appId: "1:483343130388:web:4cc8315b96e3bf1dbaec01"
  })

  export const firestore = firebase.firestore()