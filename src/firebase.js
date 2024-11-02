import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAXhL-JIiKyTnSnZEBiLugoTZYp5QXzAqk",
    authDomain: "new-york-587e5.firebaseapp.com",
    databaseURL: "https://new-york-587e5-default-rtdb.firebaseio.com",
    projectId: "new-york-587e5",
    storageBucket: "new-york-587e5.appspot.com",
    messagingSenderId: "234738250444",
    appId: "1:234738250444:web:a8ae713fdcb843ef118869",
    measurementId: "G-68TNBTCWBY"
  };
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
