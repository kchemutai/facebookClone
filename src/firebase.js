import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAb-RCmLrUy-H4niz7z1zcV-tu-hisn_9E",
    authDomain: "facebook-clone-efd11.firebaseapp.com",
    projectId: "facebook-clone-efd11",
    storageBucket: "facebook-clone-efd11.appspot.com",
    messagingSenderId: "652230104514",
    appId: "1:652230104514:web:dbddba96eded7f8d07b25b",
    measurementId: "G-5P5S8YHWVX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db