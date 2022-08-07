import { initializeApp } from "firebase/app"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDqbWl3BfrF9_PpabYYgh13WnRSQIQtHP8",
  authDomain: "mern-blog-fd696.firebaseapp.com",
  projectId: "mern-blog-fd696",
  storageBucket: "mern-blog-fd696.appspot.com",
  messagingSenderId: "712617134970",
  appId: "1:712617134970:web:00780df0b300bd1154a4c3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage, ref, uploadBytesResumable, getDownloadURL, deleteObject }
