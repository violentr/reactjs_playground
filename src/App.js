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

  nameChanged = (event) =>{
    this.setState({persons: [
      {name: event.target.value, age: 21},
      {name: "Stephany", age: 21}
    ]
   })
  }
  render() {
    const persons =(
      <div>
      {this.state.persons.map(person => {
        console.log(person.name)
        return <Person
        name={person.name}
        age={person.age}/>
      })}
      </div>
     );
    return (
      <div className="App">
        <h1> React App </h1>
       {persons}
      </div>
    );
  }
}

export default App;
