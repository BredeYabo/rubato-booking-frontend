import React from "react";
import {connect} from "react-redux";
import "./styles/index.css"

class LoginComponent extends React.Component {
    login = () => {
        const username = document.getElementById("username").value;
        if (username > " ") {
            this.props.login(username);
            this.props.history.push("/")
        } else {
            // Error message to user here.
            alert("Need to have a name bruh")
        }

    };


    render() {
        return (
            <div id="loginContainer">
                <div id="form">

                    <input type="text" className="standard-input" id="username" placeholder="Username" autoComplete="off"/>
                    <br/>

                    <input type="password" className="standard-input" id="password" placeholder="Password" autoComplete="off"/>

                    <button id="login_submit" className={"nav_button"} onClick={this.login}>Log in</button>

                </div>
            </div>
        )
    }
}

// maps state from the store to props
// counter is the countReducer from the rootReducer
function mapStateToProps(state) {
    return {
        username: state.user.username
    };
}


// connects these redux functions to the component
export default connect(mapStateToProps)(LoginComponent);