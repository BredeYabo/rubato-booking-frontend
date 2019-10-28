import React from 'react';
import './App.css';
import ExampleComponent from "./components/ExampleComponent";
import Header from "./components/Header";
import ArtistList from "./components/ArtistList";
import Footer from "./components/Footer"

class App extends React.Component {

  render() {
    return(
        <div>
           <Header />
           <ArtistList />
           <Footer />
           <ExampleComponent/>
        </div>
    )
  }
}

export default App;
