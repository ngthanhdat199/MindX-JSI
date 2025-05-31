const firebaseConfig = {
    apiKey: "AIzaSyD3Ayz8YsiSfxe9ZURjv_FifoWs2kV_oqQ",
    authDomain: "coffee-management-ef80c.firebaseapp.com",
    projectId: "coffee-management-ef80c",
    storageBucket: "coffee-management-ef80c.firebasestorage.app",
    messagingSenderId: "122266757668",
    appId: "1:122266757668:web:337dbdd8c4185b4b10c6b1"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

function addUser() {
    // Add a second document with a generated ID.
    db.collection("users").add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function getUsers() {
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first} ${doc.data().last}`);
        });
    });
}

getUsers();