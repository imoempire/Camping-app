import React, { Component } from 'react';

class PersonsForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            Persons : [
                {
                    Name: "", Age: "", 
                    Room: "", CampColor: ""
                } 
            ]} };

    handleChange=(e)=>{
        e.preventDefault();
        this.setState({[ e.target.name]  : e.target.value})
    }
    
    handleSubmit =(e)=>{
        e.preventDefault();
    this.props.addPerson(this.state);
    this.setState({
        
            Name: "", Age: "", 
            Room: "", CampColor: ""
        
    })  }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="Name" value={this.state.Name} placeholder="Name"onChange={this.handleChange}/>
                    <label htmlFor="Age">Age</label>
                    <input type="number" name="Age" value={this.state.Age} placeholder="Age"onChange={this.handleChange}/>
                    <label htmlFor="Room">Room Number</label>
                    <input type="number" name="Room" value={this.state.Room} placeholder="Room Number" onChange={this.handleChange}/>
                    <label htmlFor="color">Camp Color</label>
                    <input type="text" name="CampColor" value={this.state.CampColor} placeholder="Camp Color" onChange={this.handleChange}/>
                    <button type="submit" >Add Camper</button>
                </form>
                
            </div>
        );
    }
}

export default PersonsForm;
