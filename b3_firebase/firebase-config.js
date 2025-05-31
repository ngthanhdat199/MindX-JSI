const firebaseConfig = {
  apiKey: "AIzaSyD3Ayz8YsiSfxe9ZURjv_FifoWs2kV_oqQ",
  authDomain: "coffee-management-ef80c.firebaseapp.com",
  projectId: "coffee-management-ef80c",
  storageBucket: "coffee-management-ef80c.firebasestorage.app",
  messagingSenderId: "122266757668",
  appId: "1:122266757668:web:337dbdd8c4185b4b10c6b1"
};

firebase.initializeApp(firebaseConfig);

let email = "dat2@gmail.com";
let password = "123456";

// dang nhap
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in:", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// dang ky
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User registered:", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });