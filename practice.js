var firebaseConfig = {
    apiKey: "AIzaSyDPCUs_UsIzC-YHCjbav4OJCaYS8ejuiMg",
    authDomain: "kwitter-f2aff.firebaseapp.com",
    databaseURL: "https://kwitter-f2aff-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2aff",
    storageBucket: "kwitter-f2aff.appspot.com",
    messagingSenderId: "149064746384",
    appId: "1:149064746384:web:7ddfcf3b3317c036b35f15"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name =document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding_user"
      });
  }