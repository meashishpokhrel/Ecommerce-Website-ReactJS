import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyChztxjSwlRwkP--0v834qzc98ZrO-ZpbE",
    authDomain: "ecommerce-website-reactjs.firebaseapp.com",
    projectId: "ecommerce-website-reactjs",
    storageBucket: "ecommerce-website-reactjs.appspot.com",
    messagingSenderId: "980652067961",
    appId: "1:980652067961:web:72f5a7375e9817a78c98a8",
    measurementId: "G-1YTTTE79LQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export  const  firestore=firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
