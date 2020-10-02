import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyAUv6YgiO00Xw1Zb5CzukdojZhzfVQ7s9k",
	authDomain: "keeper-5bb7b.firebaseapp.com",
	databaseURL: "https://keeper-5bb7b.firebaseio.com",
	projectId: "keeper-5bb7b",
	storageBucket: "keeper-5bb7b.appspot.com",
	messagingSenderId: "96411361388",
	appId: "1:96411361388:web:a23beb7a8f149bd9dab849",
	measurementId: "G-41GGDNE4L9",
});

const db = firebaseConfig.firestore();

export default db;
