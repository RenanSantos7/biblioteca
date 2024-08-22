import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = initializeApp({
  apiKey: "AIzaSyANl8_4ADjfR8qQjiB3RK2GPdnsQXQzQQ4",
  authDomain: "biblioteca-c293f.firebaseapp.com",
  projectId: "biblioteca-c293f",
  storageBucket: "biblioteca-c293f.appspot.com",
  messagingSenderId: "776135433703",
  appId: "1:776135433703:web:23af51dbc06b18d8e27142"
});

const db = getFirestore(app);

export default db;