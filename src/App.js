import React from 'react';
import './App.css';
import ContentComponent from "./components/ContentComponent";
import HeaderComponent from "./components/HeaderComponent";
import ArtistPage from "./components/ArtistPage";
import LoginComponent from "./components/LoginComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ContactComponent from "./components/ContactComponent";
import withLoadingScreen from "./components/LoadingScreenComponent";
import AboutComponent from "./components/AboutComponent";
import Footer from "./components/FooterComponent"

class App extends React.Component {

  render() {
    return(
        <div className={'mainContainer'}>

            <Router>
                <HeaderComponent className={"header"}/>
                <Route exact path="/" component={ContentComponent} className={"contentContainer"}/>
                <Route path="/login" component={LoginComponent} className={"contentContainer"}/>
                <Route path="/kontakt" component={ContactComponent} className={"contentContainer"}/>
                <Route path="/artist/:artistId" component={withLoadingScreen(ArtistPage)} className={"contentContainer"}/>
                <Route path="/om" component={AboutComponent} className={"contentContainer"} />
                <Footer className={"footer"}/>
            </Router>

        </div>
    )
  }
}


export default App;
