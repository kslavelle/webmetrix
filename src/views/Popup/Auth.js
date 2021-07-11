import firebase from "firebase";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyC8kK6cZKx5dCZh2w2-zGV7m-emZGy_2d4",
    authDomain: "webmetrix-318213.firebaseapp.com",
};

var app = firebase.initializeApp(config);

function CreateUser(email, password) {
    const auth = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => { 
        var user = userCredential.user;
        console.log(`success: ${user}`);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`error: ${errorMessage}`);
    });
    return null
}

function SignInUser(email, password) {
    // displays 'login' even at sign-up page.
    const auth = firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => { 
        var user = userCredential.user;
        console.log(`success: ${user}`);
    })
    .catch(function(error) {
        // Handle Errors.
        var errorCode = error.code;
        var errorMessage = error.message;
        // if (errorCode === 'auth/wrong-password') {
        //   alert('Wrong password.');
        // } else {
        //   alert(errorMessage);
        // }
        console.log(`error: ${errorMessage}`);
      });
}


export default (CreateUser, SignInUser);