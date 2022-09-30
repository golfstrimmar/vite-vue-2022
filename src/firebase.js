import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTr_tR1MbYjHurQgAfdgEntqZQ150rZyA",
  authDomain: "deutsch-d26e4.firebaseapp.com",
  databaseURL:
    "https://deutsch-d26e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deutsch-d26e4",
  storageBucket: "deutsch-d26e4.appspot.com",
  messagingSenderId: "1002823720200",
  appId: "1:1002823720200:web:c70fc15791d9ed502520bd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

