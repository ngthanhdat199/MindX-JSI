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

function addUser(username, score) {
    // thêm một document vào collection users
    db.collection("users").add({
        username: username,
        score: score,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function getUsers() {
    // order by score
    db.collection("users").orderBy("score", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.data().username} => ${doc.data().score}`);
        });
    });
}

function searchUser(username) {
    db.collection("users").where("username", "==", username).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.data().username} => ${doc.data().score}`);
        });
    });
}

// let usernames = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C", "Nguyen Van D", "Nguyen Van E"];
// let scores = [8.5, 9.0, 7.5, 6.0, 8.0];

// usernames.forEach((username, index) => {
//     addUser(username, scores[index]);
// });

// getUsers();

// searchUser("Nguyen Van D");
