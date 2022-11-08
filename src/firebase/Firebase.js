
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKoXuhJ_ygROkHTc-7LtTlUClASiHrSq8",
  authDomain: "infetech-service.firebaseapp.com",
  projectId: "infetech-service",
  storageBucket: "infetech-service.appspot.com",
  messagingSenderId: "223219285894",
  appId: "1:223219285894:web:9be1bfa5ce2f2cc473b607"
};

const app = initializeApp(firebaseConfig);
export default app;