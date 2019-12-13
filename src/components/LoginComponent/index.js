import React from "react";
import {connect} from "react-redux";
import styles from './styles/styles.module.css'

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
            <div className={styles.loginContainer}>
                <form className={styles.form} onSubmit={this.login}>
                    <input
                        name="username"
                        type="email"
                        className={styles.standard_input}
                        placeholder="email"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                        required />
                    <input
                        name="password"
                        type="password"
                        className={styles.standard_input}
                        placeholder="passord"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                        minLength={8}
                        maxLength={16}
                        required />
                    <input type="submit" className={styles.login_submit} value={"logg inn"}/>
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
export default connect(mapStateToProps)(LoginComponent);