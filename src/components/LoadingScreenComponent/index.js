import React, { Component } from "react";
import { withRouter } from "react-router";
import LoadingScreen from "react-loading-screen";
import styles from './styles/style.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {getLoaded} from "../../redux/reducers/loadingReducer";
import {startLoading, stopLoading} from "../../redux/actions/loadingActions";

export default WrappedComponent => {
    class LoadingScreenWrapper extends Component{

        componentDidMount() {
            this.props.startLoading();
            this.setState({
                timestamp: new Date(),
                minTimeout: 500,
            });
        }

        doWhileLoading = async (...funcs) => {
            for (let i in funcs){
                await funcs[i]()
            }
            let interval = new Date() - this.state.timestamp;
            if (this.state.minTimeout > interval) {
                setTimeout(this.props.stopLoading, this.state.minTimeout - interval)
            } else {
                this.props.stopLoading()
            }
        };

        render = () => {
            if (this.props.loading.isLoading) {
                return (
                    <React.Fragment>
                        <div className={styles.wrapper}>
                            <LoadingScreen loading={this.props.loading.isLoading}
                                           bgColor='#f1f1f1'
                                           spinnerColor='#9ee5f8'
                                           textColor='#676767'
                                           logoSrc='http://localhost:3000/rubato_logo.png'
                                           children={""}
                            />
                        </div>
                    </React.Fragment>
                )
            } else {
                return <WrappedComponent {...this.props} doWhileLoading={this.doWhileLoading}/>
            }

        }
    }

    const mapStateToProps = state => ({
        loading: getLoaded(state),
    });

    const mapDispatchToProps = {
        startLoading,
        stopLoading,
    };

    return compose(
        withRouter,
        connect(mapStateToProps, mapDispatchToProps)
    )(LoadingScreenWrapper);
}

