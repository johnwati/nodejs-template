const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyC2UL9vZpdlIZVp4Igb3KnMKbOIxdUMp_Y",
  authDomain: "tinggpayment.firebaseapp.com",
  projectId: "tinggpayment",
  storageBucket: "tinggpayment.appspot.com",
  messagingSenderId: "461605646640",
  appId: "1:461605646640:web:7830dff569c9ce8b2bd8f5",
  measurementId: "G-06F2G74W1M"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
