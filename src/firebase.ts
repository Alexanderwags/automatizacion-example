import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgYdwz1LBkw2hDLN14l5bm3mcYN8PYp18",
  authDomain: "auto-example17.firebaseapp.com",
  databaseURL: "https://auto-example17-default-rtdb.firebaseio.com",
  projectId: "auto-example17",
  storageBucket: "auto-example17.appspot.com",
  messagingSenderId: "699424893243",
  appId: "1:699424893243:web:65dc72dabc77cfa9bd6f1e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
