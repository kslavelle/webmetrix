

import firebase from "firebase";
import "firebase/auth";

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


export {SignInUser};