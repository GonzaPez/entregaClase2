import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCfb3zIvzmE2MrBgxtOZeKZhjtY9D0oBDA",
  authDomain: "ecommercereact-e42ec.firebaseapp.com",
  projectId: "ecommercereact-e42ec",
  storageBucket: "ecommercereact-e42ec.appspot.com",
  messagingSenderId: "407358936438",
  appId: "1:407358936438:web:9b3571c0e6fbe746219657"    
};


const app = firebase.initializeApp(firebaseConfig)


export function getFirestore(){    
    return firebase.firestore(app)
}
