import firebase from "firebase";

//const firebaseConfig = {
   // apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
   // authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
   // projectId: "disneyplus-clone-a33d5",
   // storageBucket: "disneyplus-clone-a33d5.appspot.com",
   // messagingSenderId: "37918794208",
   // appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
   // measurementId: "G-DRVLJKWRWG",



  //};

  const firebaseConfig = {
    apiKey: "AIzaSyAU9tR0v641TLt8jq7k1A8gmrvEqbHdO3w",
    authDomain: "hotstar-40152.firebaseapp.com",
    projectId: "hotstar-40152",
    storageBucket: "hotstar-40152.appspot.com",
    messagingSenderId: "587506271153",
    appId: "1:587506271153:web:77308e89407ca0c72cf390"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;



