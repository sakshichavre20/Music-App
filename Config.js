import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOhpXZlqZpPQ-lxfNzXTav0jIJhqfu80g",
  authDomain: "music-app-86478.firebaseapp.com",
  projectId: "music-app-86478",
  storageBucket: "music-app-86478.appspot.com",
  messagingSenderId: "964872642493",
  appId: "1:964872642493:web:4e5bc5e34e3ff802d2fcd4",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
