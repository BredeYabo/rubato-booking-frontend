import React,{Component} from 'react';
import './styles/styles.css';
import ArtistPreviewComponent from "../ArtistPreviewComponent";
import {getAllUsers, getUserPending} from "../../redux/reducers/userReducer";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {fetchAllUsers} from "../../redux/thunks/fetchUser";
import InfiniteScroll from "react-infinite-scroll-component";


class ContentComponent extends Component{

    componentDidMount() {
        this.props.doWhileLoading(this.props.fetchAllUsers)
    }

    render() {
        return(
            <div className={'contentContainer'} >
                <InfiniteScroll next={this.props.fetchAllUsers}
                                hasMore={false}
                                loader={<h4>Loading...</h4>}
                                dataLength={this.props.users.length}
                                className={'artistGrid'}>
                    {this.props.users.map((user) => {
                        return <ArtistPreviewComponent key={user.personId} artist={user}/>
                    })}
                </InfiniteScroll>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: getAllUsers(state),
    pending: getUserPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllUsers: fetchAllUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent)