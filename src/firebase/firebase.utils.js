import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5rHe50DIeUHAqqM6cKTW6vBtBlKmaX2M",
  authDomain: "crown-db-a7fdd.firebaseapp.com",
  databaseURL: "https://crown-db-a7fdd.firebaseio.com",
  projectId: "crown-db-a7fdd",
  storageBucket: "crown-db-a7fdd.appspot.com",
  messagingSenderId: "779843673024",
  appId: "1:779843673024:web:584fbd09d6a21678fa8625",
  measurementId: "G-EYQCPW3PGD",
};

// into App
export const createUserProfileDocument = async (userauth, additionalData) => {
  if (!userauth) {
    return;
  }

  const userRef = firestore.doc(`users/${userauth.uid}`);
  const snapShot = await userRef.get();

  console.log("createUserProfileDocument", snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userauth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // being used in App
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// into sign in component
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
