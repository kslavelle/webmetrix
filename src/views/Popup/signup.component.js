import { useState } from "react";
import React from "react";

import CreateUser from "./Auth";

const SignUp = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        CreateUser(email, password);
    }

    return (
        <form>
            <h3>Sign Up</h3>
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