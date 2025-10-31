// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDdtHTlKmE6smtgiP-QZAOi6yPmtox8S4c",
  authDomain: "netflix-clone-f1b73.firebaseapp.com",
  projectId: "netflix-clone-f1b73",
  storageBucket: "netflix-clone-f1b73.firebasestorage.app",
  messagingSenderId: "664616114067",
  appId: "1:664616114067:web:4f65814119a101e271ba66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), { // Changed "user" to "users"
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      createdAt: new Date()
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(""))
  }
}

const login = async (email, password) => { 
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(""))
  }
}

const logout = () => {
  signOut(auth);
}

export { signup, login, logout, auth, db };