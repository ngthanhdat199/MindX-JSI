// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGoaF5VH4ea0qk-dwysTXHe4v59_EYgzM",
  authDomain: "coffee-management-test.firebaseapp.com",
  projectId: "coffee-management-test",
  storageBucket: "coffee-management-test.firebasestorage.app",
  messagingSenderId: "180395162158",
  appId: "1:180395162158:web:98416bc01a5a271c23fdbf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
