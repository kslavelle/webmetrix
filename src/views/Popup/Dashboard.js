import firebase from "firebase";
import "firebase/auth";
import { Redirect } from "react-router-dom";

const CheckLoggedIn = () => {
    if (firebase.auth().currentUser === null) {
        return <Redirect to="/sign-in" />
    }
    return null;
}

const Dashboard = (props) => {
    return (
        <div>
            {CheckLoggedIn()}
            <h1>Logged In</h1>
        </div>
    )
}

export default Dashboard;