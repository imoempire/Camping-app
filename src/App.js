import React, { Component } from 'react';
import Person from './Components/Person';
import PersonsForm from './Components/PersonsForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Persons : [
        { Name: "John", Age: "20", Room: "20", CampColor: "red", id: "ug374398ir3"}
      ]
    }
  };
    AddHandle = (newPerson)=>{
      newPerson.id = Math.random().toString()
      this.setState({
        Persons: [...this.state.Persons, newPerson]
      })
    }
  render() {
    const Persons = this.state.Persons.map((person, index)=>{
      return(
        <Person Persons={person} index={index}/>
      )
    })
    return (
      <div>
        <PersonsForm addPerson={this.AddHandle}/>
        <br />
        {Persons}
      </div>
    );
  }
}

export default App;
