// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Ayz8YsiSfxe9ZURjv_FifoWs2kV_oqQ",
  authDomain: "coffee-management-ef80c.firebaseapp.com",
  projectId: "coffee-management-ef80c",
  storageBucket: "coffee-management-ef80c.firebasestorage.app",
  messagingSenderId: "122266757668",
  appId: "1:122266757668:web:337dbdd8c4185b4b10c6b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
