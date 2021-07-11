// function SignIn(email, password) {
//     const auth = firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     // ...
//     })
//     .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//     });
//     return (
//         <div>
//             Hello world
//             <input auth />
//         </div>
//     )
// }

// export default (CreateUser, SignIn)

import firebase from "firebase";
import "firebase/auth";

var config = {
    apiKey: "",
    authDomain: "",
};
var app = firebase.initializeApp(config);

function CreateUser(email, password) {
    const auth = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
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

export default CreateUser;