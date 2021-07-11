import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <input type="email" className="form-control" placeholder="Enter email" />
                <input type="password" className="form-control" placeholder="Enter password" />
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}