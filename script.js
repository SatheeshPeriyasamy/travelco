
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase, ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDlLRXqFegDE8Bv2npjCQEVVBXEHo7zXU0",
    authDomain: "travelsite-fb1a7.firebaseapp.com",
    projectId: "travelsite-fb1a7",
    storageBucket: "travelsite-fb1a7.appspot.com",
    messagingSenderId: "79839121496",
    appId: "1:79839121496:web:aafae4990dcdab844d3a2d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   get ref to db
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db, 'user/' + document.getElementById("username").value),
    {

      Username: document.getElementById("username").value,
      Email: document.getElementById("email").value,
      PhoneNumber: document.getElementById("phone").value

    });
      alert("Logged in Successfully!!!");
   })