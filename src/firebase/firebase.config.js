// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf6wWWeXUJ_GSdCdbaWOyNw23YDLsmvlY",
    authDomain: "kla-online-learning.firebaseapp.com",
    projectId: "kla-online-learning",
    storageBucket: "kla-online-learning.appspot.com",
    messagingSenderId: "561767740409",
    appId: "1:561767740409:web:497c20862b866d95600328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;