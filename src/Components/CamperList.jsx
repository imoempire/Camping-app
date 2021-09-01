import React from 'react';
import { connect } from 'react-redux';
import Person from './Person';


const CamperList = ({campers, deleteCamper}) => {
    const camperList = campers.map((camper)=>{
        return(
        <div className="column is-4" key={camper.id}>
        <Person  
            id={camper.id}
            camper_1={camper.camper_1}
            camper_2={camper.camper_2}
            number={camper.number}
            email={camper.email}
            room_number={camper.room_number}
            check_in={camper.check_in}
            check_out={camper.check_out}
            deleteCamper={deleteCamper}
        />
        </div>
        )
    }); 
    return (
        <div className="container camp-container">
            <div className="columns" style={{flexWrap: "wrap"}}>
            {camperList} 
            </div>
        </div>
    );
}


const mapStateToProps=( state )=>{
    return {
        campers: state.campers,
    }
}
export default connect(mapStateToProps)(CamperList);
