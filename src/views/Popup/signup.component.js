import { useState } from "react";
import React from "react";

import { Redirect } from "react-router";
import firebase from "firebase";
import "firebase/auth";

const SignUp = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [authErrorMessage, setAuthErrorMessage] = useState("");
    const [authState, setAuthState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setAuthState(true);
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthState(false);
                setAuthErrorMessage(errorMessage);
            })
    }

    return (
        <form>
            <h3>Sign Up</h3>
            {authState ?
                <Redirect to="/dashboard" /> : 
                <h3>{authErrorMessage}</h3>
            }
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </form>
    );
}

export default SignUp;