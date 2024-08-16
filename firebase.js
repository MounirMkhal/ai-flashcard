import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCETWSL7FKcj2_4VedDTyuj2k7XiX3yJu8",
    authDomain: "ai-flashcard-19ca2.firebaseapp.com",
    projectId: "ai-flashcard-19ca2",
    storageBucket: "ai-flashcard-19ca2.appspot.com",
    messagingSenderId: "293946621798",
    appId: "1:293946621798:web:36a10d7a240d8fb7ab52a7",
    measurementId: "XXXXXXXXXXXX" // paste it here
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };