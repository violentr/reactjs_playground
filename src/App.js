import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  
  state = {
    persons: [
      {name: 'Max', age: 21},
      {name: "Stephany", age: 21}
    ]
  }
  switchName = (newName) =>{
    this.setState({persons: [
      {name: newName, age: 21},
      {name: "Stephany", age: 21}
    ]
   })
  }
  render() {
    const persons = this.state.persons
    return (
      <div className="App">
        <h1> React App </h1>
        <button onClick={() => this.switchName('Maximilian')}>Swith Name </button>
        <Person name={persons[0].name} age={persons[0].age}> My Hobbie is Raicing </Person>
        <Person name={persons[1].name} age={persons[1].age}
         click={this.switchName.bind(this, "Max!")}/>
      </div>
    );
  }
}

export default App;
