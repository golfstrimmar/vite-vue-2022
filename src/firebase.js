import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCTr_tR1MbYjHurQgAfdgEntqZQ150rZyA",
//   authDomain: "deutsch-d26e4.firebaseapp.com",
//   databaseURL:
//     "https://deutsch-d26e4-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "deutsch-d26e4",
//   storageBucket: "deutsch-d26e4.appspot.com",
//   messagingSenderId: "1002823720200",
//   appId: "1:1002823720200:web:c70fc15791d9ed502520bd",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBQOOBt08DlSiwjP-j14Xkq2QC_cFwjNGc",
  authDomain: "deutschnew-89a9a.firebaseapp.com",
  projectId: "deutschnew-89a9a",
  storageBucket: "deutschnew-89a9a.appspot.com",
  messagingSenderId: "801111998678",
  appId: "1:801111998678:web:2bf19b90884645d47c0977",
  measurementId: "G-VTXTG0M7DE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
