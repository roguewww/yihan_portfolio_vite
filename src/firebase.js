import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBXf5w8dx8SqxgeQHx36_lqB0DWIIdsQr4",
    authDomain: "drawing-f0507.firebaseapp.com",
    projectId: "drawing-f0507",
    storageBucket: "drawing-f0507.appspot.com",
    messagingSenderId: "456342717411",
    appId: "1:456342717411:web:4f12e5a5d39da05e6e96d6",
    measurementId: "G-4ZPHQT0SET"
    };
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
