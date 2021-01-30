import React from "react";
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  state ={string:'hello world'};
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {this.state.string}
          </p>
          <button
            onClick={()=>this.setState({string:'Welcome to HELL!!!'})}
          >
            Click Me!
          </button>
        </header>
      </div>
    );
  }
 
}

export default App;
