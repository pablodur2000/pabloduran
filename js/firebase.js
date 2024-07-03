// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBonLp9Yb2_xqciErqclFFj3dWRs_udm7Q",
  authDomain: "base-portfolio-duran.firebaseapp.com",
  projectId: "base-portfolio-duran",
  storageBucket: "base-portfolio-duran.appspot.com",
  messagingSenderId: "59695365590",
  appId: "1:59695365590:web:da08cb895efa29a766b877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import {getDatabase, ref, child, get, set, update, remove, push} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
const db = getDatabase();



const buttonContact = document.querySelectorAll('.button-contact');

let name = document.querySelector('#name-input');
let email = document.querySelector('#email-input');
let message = document.querySelector('#message-input');




buttonContact[0].addEventListener("click", () => {
    AddData();
});

function AddData(){
  
  const reservePath = 'Emails/'; // Ruta base para el día específico
  
  // Obtener una referencia a la base de datos
  const dbRef = ref(db);
  // Construir la ruta completa de la reserva
  const reservaRef = child(dbRef, reservePath);
  // Generar un nuevo UID para la reserva
  const newReserveRef = push(reservaRef);
  set(newReserveRef, {
    nombre: name.value,
    email: email.value,
    message: message.value
  })
  .then(() => {
    alert("Mensaje enviado! Gracias por comunicarte.");
    setTimeout(() => {
      location.reload();
    }, 2000);
  })
  .catch((error) => {
    alert("Error al enviar el mensaje, intente nuevamente o comuniquese por otro medio. Disculpe las molestias.");
    console.log(error);
  });
}
