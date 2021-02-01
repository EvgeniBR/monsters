import React from "react";
import "./App.css";
import  CardList from './components/card-list/CardList.component'

class App extends React.Component {
  state = {
    monsters: [],
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users }));
  }

  render() {
    return (
      <div className="App">
      <CardList name='Evgeni'> {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}  
        </CardList>
       
      </div>
    );
  }
}

export default App;
