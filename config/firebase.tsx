import firebase from "firebase";
import { createContext } from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZFvITIGdw-t_ZOTGV-Bjy67fwr1E3uhA",
  authDomain: "zonghong-c19ad.firebaseapp.com",
  projectId: "zonghong-c19ad",
  storageBucket: "zonghong-c19ad.appspot.com",
  messagingSenderId: "499193547793",
  appId: "1:499193547793:web:4f430fe0a2c1f1747ab5b0",
  measurementId: "G-3W7YLSZ7WY",
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
