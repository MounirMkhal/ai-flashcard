import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCETWSL7FKcj2_4VedDTyuj2k7XiX3yJu8",
    authDomain: "ai-flashcard-19ca2.firebaseapp.com",
    projectId: "ai-flashcard-19ca2",
    storageBucket: "ai-flashcard-19ca2.appspot.com",
    messagingSenderId: "293946621798",
    appId: "1:293946621798:web:36a10d7a240d8fb7ab52a7",
    measurementId: "G-TX6XSC0J98"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
