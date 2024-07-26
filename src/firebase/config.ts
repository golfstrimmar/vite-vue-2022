import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA_Z5b3ehct2-3V_PYkYr40G4honXN5Zkg",
  authDomain: "fir-arbeite.firebaseapp.com",
  projectId: "fir-arbeite",
  storageBucket: "fir-arbeite.appspot.com",
  messagingSenderId: "251791827195",
  appId: "1:251791827195:web:0e48ead7a7c6b23e97505e"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }


