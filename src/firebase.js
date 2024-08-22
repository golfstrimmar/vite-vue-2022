import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
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

async function saveUserData(uid, data) {
  try {
    await setDoc(doc(db, "users", uid), data, { merge: true });
    console.log("Данные успешно сохранены");
  } catch (error) {
    console.error("Ошибка при сохранении данных:", error);
  }
}

// Пример использования:
const userData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    saveUserData(user.uid, userData);
  }
});

export { db, auth };
