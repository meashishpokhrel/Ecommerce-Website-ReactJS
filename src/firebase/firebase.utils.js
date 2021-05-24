import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;


