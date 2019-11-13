import React from 'react';
import './App.css';
import ContentComponent from "./components/ContentComponent";
import HeaderComponent from "./components/HeaderComponent";
import ArtistPage from "./components/ArtistPage";

class App extends React.Component {

  render() {
    return(
        <div className={'mainContainer'}>
            <HeaderComponent/>
            <ArtistPage/>
        </div>
    )
  }
}

export default App;
