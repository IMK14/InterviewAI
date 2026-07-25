import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiYSwIIen8hp_gDETumRK_4FIH1wqJCvM",
  authDomain: "interviewai-c0af7.firebaseapp.com",
  projectId: "interviewai-c0af7",
  storageBucket: "interviewai-c0af7.firebasestorage.app",
  messagingSenderId: "965881407789",
  appId: "1:965881407789:web:e9c1cd828c3be763a98ba4",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };