// Import the functions you need from the SDKs you need
import Firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsEir5Fj8C8ZPcGXcwz4Ai9A7n8PyPEEg",
  authDomain: "list-of-debtors-5bcb3.firebaseapp.com",
  projectId: "list-of-debtors-5bcb3",
  storageBucket: "list-of-debtors-5bcb3.appspot.com",
  messagingSenderId: "1006007839741",
  appId: "1:1006007839741:web:a5f8f5716473b48c7bc794",
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
export default Firebase;
