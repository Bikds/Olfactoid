var app_fireBase = {};
(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDtUv0d9ePNGIZpvhCg2mDplG6SzcVj2bI",
    authDomain: "scftrial1.firebaseapp.com",
    databaseURL: "https://scftrial1.firebaseio.com",
    projectId: "scftrial1",
    storageBucket: "",
    messagingSenderId: "756915675915",
    appId: "1:756915675915:web:7655e35574b41b81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;
})()

function save_data() {
  if (typeof (Storage) !== "undefined") {

    // Store
    localStorage.setItem("email", document.getElementById('user_email').value);
    localStorage.setItem("first", document.getElementById('user_first').value);
    localStorage.setItem("last", document.getElementById('user_last').value);
    localStorage.setItem("age", document.getElementById('user_age').value);
    localStorage.setItem("gender", document.getElementById('user_gender').value);
    localStorage.setItem("country", document.getElementById('user_country').value);
    // window.location.href = "index.html";
    // Retrieve
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  //window.alert("The user is created successfully!");
  //window.location.href = "index.html";
  //console.log("hhellllo");
}

function submitform() {
  var f = document.getElementsByTagName('form')[0];
  console.log("hi");
  if (f.checkValidity()) {
    console.log("test1");
    window.location.href = "index.html";
    f.submit();
    save_data();
    console.log("Test");
    window.location.href = "index.html";
  } else {
    alert("Please fill out all the fields. Remember your email field must include an '@' symbol");

  }
}

