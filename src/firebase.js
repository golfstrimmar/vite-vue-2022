import { getDatabase, ref, child, set, get, onValue } from "firebase/database";

import { initializeApp } from "firebase/app";
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

let app = initializeApp(firebaseConfig);

// let dbRef = ref(getDatabase());
// get(child(dbRef, `names`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       Names = snapshot.val();
//       console.log(Names);
//     } else {
//       console.log("No data available");
//     }
    
//   })
//   .catch((error) => {
//     console.error(error);
//   });



const db = getDatabase();
export default db;
