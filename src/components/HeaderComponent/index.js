import React,{Component} from 'react';
import './styles/styles.css';
import '../../res/fonts/futura.ttf'

// import ExampleComponent from "./components/ExampleComponent";

export default class HeaderComponent extends Component{
    render() {
        return(
            <div className='headerContainer'>
                <div className='headerText' >rubato.</div>
            </div>
        )
    }
}