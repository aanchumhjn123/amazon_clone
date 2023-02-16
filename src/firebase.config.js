 
import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth";
 import {getFirestore} from "firebase/firestore";
 import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyD54zuaMGNjCbnWVW8GfnNa9dmoBrZZccA",
  authDomain: "fir-a6b6a.firebaseapp.com",
  projectId: "fir-a6b6a",
  storageBucket: "fir-a6b6a.appspot.com",
  messagingSenderId: "123428969865",
  appId: "1:123428969865:web:c6ddee9a141afdaa845558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;