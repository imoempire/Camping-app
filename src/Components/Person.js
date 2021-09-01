import React from 'react'

export default function Persons({Persons, index}) {
    return (
        <div key={index}>
            <h3>Name: {Persons.Name}</h3>
            <h3>Age: {Persons.Age}</h3>
            <h3>Room: {Persons.Room} </h3>
            <h3>Camp Color: {Persons.CampColor} </h3>
        </div>
    )
}
