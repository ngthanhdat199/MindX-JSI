// const firebaseConfig = {
//     apiKey: "AIzaSyD3Ayz8YsiSfxe9ZURjv_FifoWs2kV_oqQ",
//     authDomain: "coffee-management-ef80c.firebaseapp.com",
//     projectId: "coffee-management-ef80c",
//     storageBucket: "coffee-management-ef80c.firebasestorage.app",
//     messagingSenderId: "122266757668",
//     appId: "1:122266757668:web:337dbdd8c4185b4b10c6b1"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCMBw49bZzw_qynjhrgoOX6jPIHZUZDQgU",
    authDomain: "mindx-jsi-6fc13.firebaseapp.com",
    projectId: "mindx-jsi-6fc13",
    storageBucket: "mindx-jsi-6fc13.firebasestorage.app",
    messagingSenderId: "1065006352653",
    appId: "1:1065006352653:web:e02e200211d5be67bf8844"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function addUser() {
    // thêm một document vào collection users
    db.collection("users").add({
        first: "Ada 123",
        last: "Lovelace 123",
        born: 1815,
        gender: "female"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function getUsers() {
    // Get all
    // db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => username: ${doc.data().username}, score: ${doc.data().score}`);
    //     });
    // });


    // Where
    // db.collection("users").where("score", "==", 9).get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => username: ${doc.data().username}, score: ${doc.data().score}`);
    //     });
    // }).catch((error) => {
    //     console.error("Error getting documents: ", error);
    // });
}

// getUsers();
