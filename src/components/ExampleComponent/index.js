import React from 'react'
import './styles.css'
import { connect } from 'react-redux';
import {increment,decrement} from "../../redux/actions/countActions";

class ExampleComponent extends React.Component {
    increment = () => {
        this.props.increment();
    };

    decrement = () => {
        this.props.decrement();
    };

    render() {
        return(
            <div>
                <div>
                    <p>This is a redux example: {this.props.count}</p>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

// maps state from the store to props
// counter is the countReducer from the rootReducer
function mapStateToProps(state) {
    return {
        count: state.counter.count,
    };
}

// maps the increment/decrement actions to the increment/decrement actions in the component
const mapDispatchToProps = {
    increment,
    decrement
};

// connects these redux functions to the component
export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
