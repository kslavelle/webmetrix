import { useState } from "react";
import React from "react";

import {SignInUser} from "./Auth";

const LogIn = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        SignInUser(email, password);
    }

    return (
        <form>
            <h3>Sign In</h3>
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

            <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block">Sign In</button>
        </form>
    );
}

export default LogIn