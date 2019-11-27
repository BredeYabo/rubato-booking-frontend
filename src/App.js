import React from 'react';
import './App.css';
import ContentComponent from "./components/ContentComponent";
import HeaderComponent from "./components/HeaderComponent";
import ArtistPage from "./components/ArtistPage";
import LoginComponent from "./components/LoginComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ContactComponent from "./components/ContactComponent";
import withLoadingScreen from "./components/LoadingScreenComponent";


class App extends React.Component {

  render() {
    return(
        <div className={'mainContainer'}>
            <Router>
                <HeaderComponent/>
                <Route exact path="/" component={ContentComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/kontakt" component={ContactComponent}/>
                <Route path="/artist/:artistId" component={withLoadingScreen(ArtistPage)}/>
            </Router>
        </div>
    )
  }
}


export default App;
