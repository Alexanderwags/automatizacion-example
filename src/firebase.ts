import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDi5xEigspJ6sUp_VVHdMMnTkgq9sE1WEc",
  databaseURL: "https://example17-a4a33-default-rtdb.firebaseio.com/",
  authDomain: "example17-a4a33.firebaseapp.com",
  projectId: "example17-a4a33",
  storageBucket: "example17-a4a33.appspot.com",
  messagingSenderId: "349935914644",
  appId: "1:349935914644:web:e0b0f52375479979582e81",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
