import React from "react";
import {login, logout} from "../../redux/actions/userActions";
import {connect} from "react-redux";
import "./styles/index.css"

class LoginComponent extends React.Component {
    login = () => {
        const username = document.getElementById("username").value;
        if (username > " ") {
            this.props.login(username)
            this.props.history.push("/")
        } else {
            alert("Need to have a name bruh")
        }

    };

    logout = () => {
        this.props.logout()
    };

    render() {
        return (
            <div id="loginContainer">
                <form action="#">

                    <input type="text" id="username" placeholder="Username" autoComplete="off"/>
                    <br/>

                    <input type="password" id="password" placeholder="Password" autoComplete="off"/>

                    <button onClick={this.login}>Log in</button>

                </form>
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

// maps the increment/decrement actions to the increment/decrement actions in the component
const mapDispatchToProps = {
    login,
    logout
};

// connects these redux functions to the component
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);