import React from 'react';
import './App.css';
import ContentComponent from "./components/ContentComponent";
import HeaderComponent from "./components/HeaderComponent";

class App extends React.Component {

  render() {
    return(
        <div className={'mainContainer'}>
            <HeaderComponent/>
            <ContentComponent/>
        </div>
    )
  }
}

export default App;
