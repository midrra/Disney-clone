import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-QgHmePoO0QLgVR1zwKEtdanL_FJd_dQ",
  authDomain: "disney-clone-4678c.firebaseapp.com",
  projectId: "disney-clone-4678c",
  storageBucket: "disney-clone-4678c.appspot.com",
  messagingSenderId: "154519815616",
  appId: "1:154519815616:web:9ede5887ed7431bdcdf425",
};

// Initialize Firebase
const firestore = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
