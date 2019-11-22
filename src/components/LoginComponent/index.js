import React from "react";
import {login} from "../../redux/actions/userActions.js";
import {connect} from "react-redux";
import "./styles/index.css"

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    login = () => {
        const username = this.state.username;
        // TODO: handle password
        //const password = this.state.password;
        this.props.login(username);
        this.props.history.push("/")
    };

    handleInputChange =(event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value})
    };

    render() {
        return (
            <div className="loginContainer">
                <form className="form" onSubmit={this.login}>
                    <input
                        name="username"
                        type="email"
                        className="standard-input username"
                        placeholder="email"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                        required />
                    <input
                        name="password"
                        type="password"
                        className="standard-input "
                        placeholder="passord"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                        minLength={8}
                        maxLength={16}
                        required />
                    <input type="submit" className={"nav_button login_submit"} value={"logg inn"}/>
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


// connects these redux functions to the component
export default connect(mapStateToProps, { login })(LoginComponent);