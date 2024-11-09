// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdxsOFRbd3PgEaiKfWccUlXM0SXxa-enw",
  authDomain: "fir-ph-1.firebaseapp.com",
  projectId: "fir-ph-1",
  storageBucket: "fir-ph-1.firebasestorage.app",
  messagingSenderId: "85179238223",
  appId: "1:85179238223:web:3d6dce2a1eb6cd37e8a73a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;