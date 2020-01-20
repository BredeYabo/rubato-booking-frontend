import React,{Component} from 'react';
import styles from './styles/styles.module.css'
import ArtistPreviewComponent from "../ArtistPreviewComponent";
import {getAllUsers, getUserPending} from "../../redux/reducers/userReducer";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {fetchAllUsersPaged} from "../../redux/thunks/fetchUser";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from 'react-loader-spinner'


class ContentComponent extends Component{

    componentDidMount() {
        this.props.doWhileLoading(() => this.props.fetchAllUsers(this.props.pagedUsers.currentPage, "idPerson,asc"));
    }

    render() {
        return(
            <div className={styles.contentContainer} >
                <InfiniteScroll next={() => this.props.fetchAllUsers(this.props.pagedUsers.currentPage, "idPerson,asc")}
                                hasMore={this.props.pagedUsers.users.length < this.props.pagedUsers.numberOfUsers}
                                loader={<Loader className={styles.loader}
                                                type="ThreeDots"
                                                color="#00BFFF"
                                                height={80}
                                                width={80} />}
                                dataLength={this.props.pagedUsers.numberOfUsers}
                                className={styles.artistGrid}>
                    {this.props.pagedUsers.users.map((user) => {
                        return <ArtistPreviewComponent key={user.personId} artist={user}/>
                    })}
                </InfiniteScroll>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pagedUsers: getAllUsers(state),
    pending: getUserPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllUsers: fetchAllUsersPaged,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent)