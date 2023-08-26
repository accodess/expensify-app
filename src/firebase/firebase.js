import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_remover
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     // console.log(snapshot.val());
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Car vermelho",
//   note: "Dream car",
//   amount: 25000,
//   createdAt: 212465665685,
// });

// database.ref("expenses").push({
//   description: "Dress",
//   note: "Black",
//   amount: 75,
//   createdAt: 1234687979845,
// });

// database.ref("expenses").push({
//   description: "Vinhos",
//   note: "red",
//   amount: 18,
//   createdAt: 213548798566,
// });

// database.ref("notes/-Nc6x6RjKd6-wOiWJKIa").update({
//   body: "Buy food",
// });

// database.ref("notes/-Nc6x6RjKd6-wOiWJKIa").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python",
// });

// const firebaseNotes = {
//   notes: {
//     apoijasdf: {
//       title: "First note!",
//       body: "This is my note",
//     },
//     apoijafgdhç: {
//       title: "Another note!",
//       body: "This is my note",
//     },
//   },
// };

// const notes = [
//   {
//     id: "12",
//     title: "First note!",
//     body: "This is my note",
//   },
//   {
//     id: "761ase",
//     title: "Another note!",
//     body: "This is my note",
//   },
// ];

// database.ref("notes").set(notes);

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref().update({
//   age: 37,
//   "job/company": "Google",
// });

/* const onValueChange = database.ref().on("value", (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref("age").set(29);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref("age").set(30);
}, 10500); */

/* database
  .ref("location/city")
  .once("value")
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log("Error fetching data", e);
  }); */

/* database
  .ref()
  .set({
    name: "Aliona Costa",
    age: 36,
    stressLevel: 6,
    job: {
      title: "Software Developer",
      company: "Google",
    },
    location: {
      city: "Lisbon",
      country: "Portugal",
    },
  })
  .then(() => {
    console.log("Data is saved");
  })
  .catch((e) => {
    console.log("This failed", e);
  });

database.ref().update({
  stressLevel: 9,
  "job/company": "Amazon",
  "location/city": "Porto",
}); */

/* database.ref("isSingle").set(null); */

/* database
  .ref()
  .remove()
  .then(() => {
    console.log("Removed succesful");
  })
  .catch((err) => {
    console.log("Error: ", err);
  }); */
