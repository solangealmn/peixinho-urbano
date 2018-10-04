let database = firebase.database();

// Register
$(document).ready(function () {
 $(".signup-btn").click(function (event) {
   event.preventDefault();
   var email = $(".email").val();
   var password = $(".password").val();
   firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(function (response) {
       var USER_ID = response.user.uid;
       database.ref("/user/" + USER_ID).set({
         userEmail: email,
         userPassword: password,
         userID: USER_ID,
       });
       window.location = "form-tickets.html?id=" + USER_ID;
     })
     .catch(function (error) {
       handleError(error);
     });
 });

 // Login
 $(".signin-btn").click(function (event) {
   event.preventDefault();
   var email = $(".email").val();
   var password = $(".password").val();
   firebase.auth().signInWithEmailAndPassword(email, password)
     .then(function (response) {
       window.location = "form-tickets.html?id=" + response.user.uid;
     })
     .catch(function (error) {
       handleError(error);
     });
 });

 function handleError(error) {
   var errorMessage = error.message;
   alert(errorMessage);
 }
});