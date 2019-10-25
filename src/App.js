import React from 'react';
import './App.css';
import ExampleComponent from "./components/ExampleComponent";

class App extends React.Component {

  render() {
    return(
        <div>
            <h1>rubato.</h1>
            <ExampleComponent/>
        </div>
    )
  }
}

export default App;
