import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_BStMTj1vvLHjdJUzhUTWrKw1sns4tpE",
  authDomain: "calo-project.firebaseapp.com",
  projectId: "calo-project",
  storageBucket: "calo-project.appspot.com",
  messagingSenderId: "453557655474",
  appId: "1:453557655474:web:07d0e1665ecd46456c76ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);