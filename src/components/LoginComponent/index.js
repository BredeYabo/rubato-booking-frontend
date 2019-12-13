import React, { useState } from "react";
import {connect} from "react-redux";
import styles from './styles/styles.module.css'

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            ny_email: '',
            ny_passord: '',
            user_type: ''
        }
    }


    login = () => {
        const username = this.state.username;
        // TODO: handle password
        //const password = this.state.password;
        this.props.login(username);
        this.props.history.push("/")
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
                        onChange={e => this.setState({username: e.target.value})}
                        required />
                    <input
                        name="password"
                        type="password"
                        className={styles.standard_input}
                        placeholder="passord"
                        autoComplete="off"
                        onChange={e => this.setState({password: e.target.value})}
                        minLength={8}
                        maxLength={16}
                        required />
                    <input type="submit" className={styles.login_submit} value={"Logg inn"}/>
                </form>

                <form className={styles.form}>
                    <input type="email"
                           name="email"
                           className={styles.standard_input}
                           placeholder="email"
                           autoComplete="off"
                           onChange={e => this.setState({ny_email: e.target.value})}
                           required
                    />
                    <input  type="password"
                            name="passord"
                            className={styles.standard_input}
                            placeholder="passord"
                            onChange={e => this.setState({ny_password: e.target.value})}
                            required
                    />

                    <div className={styles.user_type}>
                        <div className={this.state.user_type === "artist" ? styles.user_type__selected : styles.user_type__choice}
                            onClick={() => this.setState({user_type: "artist"})}>
                            <p className={this.state.user_type === "artist" ? styles.label_content : styles.label_content_selected}>Artist</p>
                        </div>
                        <div className={this.state.user_type === "arrangor" ? styles.user_type__selected : styles.user_type__choice}
                             onClick={() => this.setState({user_type: "arrangor"})}>
                            <p className={this.state.user_type === "arrangor" ? styles.label_content : styles.label_content_selected}>Arrangør</p>
                        </div>
                    </div>

                    <input type="submit"
                           className={styles.register_submit}
                           value="Registrer"
                    />
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