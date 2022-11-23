 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import {getFirestore, collection, addDoc, getDocs, deleteDoc,onSnapshot, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAj273inDu8_huLGu0BjLEvJYAS4xHDq28",
   authDomain: "fir-javascript-crud-fb18c.firebaseapp.com",
   projectId: "fir-javascript-crud-fb18c",
   storageBucket: "fir-javascript-crud-fb18c.appspot.com",
   messagingSenderId: "521758765301",
   appId: "1:521758765301:web:0e41c8459140c4758295bc"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore()
 export const saveTask = (title, description) =>
   addDoc(collection(db, 'tasks'), {title, description})
 
   export const getTasks = () => getDocs(collection(db, 'tasks'))
 
   export const onGetTasks = (callback) =>
   onSnapshot(collection(db, "tasks"), callback); 

   export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

   export const getTask =  id => getDoc (doc(db, 'tasks', id ));

   export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);
