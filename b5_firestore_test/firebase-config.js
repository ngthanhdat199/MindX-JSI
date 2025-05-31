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

// var citiesRef = db.collection("cities");

// citiesRef.doc("SF").set({
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// citiesRef.doc("LA").set({
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// citiesRef.doc("DC").set({
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// citiesRef.doc("TOK").set({
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// citiesRef.doc("BJ").set({
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });


// var docRef = db.collection("cities").doc("SF");
// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

// Query
// db.collection("cities").where("capital", "==", true)
//     .get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

// Get all
// db.collection("cities").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });


// Delete
// db.collection("cities").doc("DC").delete().then(() => {
//     console.log("Document successfully deleted!");
// }).catch((error) => {
//     console.error("Error removing document: ", error);
// });


// Update
var washingtonRef = db.collection("cities").doc("DC");

// Set the "capital" field of the city 'DC'
washingtonRef.update({
    country: "Vietnam",
})
.then(() => {
    console.log("Document successfully updated!");
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
