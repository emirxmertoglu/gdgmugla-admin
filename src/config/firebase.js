import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCK8qDCbIqe2YCqJ0PbIw0AgPLeJA_3VI0",
  authDomain: "gdgmugla.firebaseapp.com",
  databaseURL: "https://gdgmugla.firebaseio.com",
  projectId: "gdgmugla",
  storageBucket: "gdgmugla.appspot.com",
  messagingSenderId: "939273043574",
  appId: "1:939273043574:web:775a1325c2562316c3e957",
  measurementId: "G-796JVKXM97"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore:firebase.firestore(),
  auth:firebase.auth(),
  authw:firebase.auth,
  storage:firebase.storage(),
  functions: firebase.functions()
};