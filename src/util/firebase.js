// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // DB 모듈
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXP6n9OyLF-qeYQFK9YQMULSC5Sjfhm98",
  authDomain: "somrem-b2c7c.firebaseapp.com",
  projectId: "somrem-b2c7c",
  storageBucket: "somrem-b2c7c.firebasestorage.app",
  messagingSenderId: "168145491757",
  appId: "1:168145491757:web:4a859939844c41ae3da5a4",
  measurementId: "G-HD2SXLQJYJ",
  databaseURL:
    "https://somrem-b2c7c-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
// export const storage = getStorage(app);
