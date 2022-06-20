import firebase from "firebase";
import { createContext } from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9H5xdfTIfl9irvXjgRGtVj-WPpy6IWpo",
  authDomain: "deamticket-97bb6.firebaseapp.com",
  projectId: "deamticket-97bb6",
  storageBucket: "deamticket-97bb6.appspot.com",
  messagingSenderId: "649464430028",
  appId: "1:649464430028:web:9a233bd8f9e4cf7c5f7169",
  measurementId: "G-LP0WHFS2SY",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.error("Firebase initialization error");
}
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };

export interface IFirebaseContext {
  firebase: firebase.app.App;
}
export const FirebaseContext = createContext({} as IFirebaseContext);
export const FirebaseProvider = ({ children }: any) => {
  <FirebaseContext.Provider
    value={{ firebase: firebase.app() } as IFirebaseContext}
  >
    {children}
  </FirebaseContext.Provider>;
};
