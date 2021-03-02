import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCX0FWgfOGNfX0NneWMr3rkKzKISLtZbN8",
    authDomain: "react-gallery-962bc.firebaseapp.com",
    projectId: "react-gallery-962bc",
    storageBucket: "react-gallery-962bc.appspot.com",
    messagingSenderId: "1004439118103",
    appId: "1:1004439118103:web:d8922167388152f0625752"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };