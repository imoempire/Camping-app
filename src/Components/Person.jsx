import React from 'react'
import { connect } from 'react-redux';
import { deleteCamper } from '../Actions/AppActions';
import { Link } from 'react-router-dom';

const Person = ({
            id,
            camper_1,
            camper_2,
            number,
            email,
            room_number,
            check_in,
            check_out,
            deleteCamper 
  }) => {
    const removeCamper = () => {
      deleteCamper(id);
    };
    return (
        <div className="card">
        <header className="card-header">
          <p className="card-header-title has-text-danger">
            ROOM NUMBER {room_number}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <table className="table is-bordered  is-narrow is-hoverable is-fullwidth">
              <tbody>
                <tr>
                  <th>Camper 1</th>
                  <td>{camper_1}</td>
                </tr>
                <tr>
                  <th>Camper 2</th>
                  <td>{camper_2}</td>
                </tr>
                <tr>
                  <th>Number of Campers</th>
                  <td>{number}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>{email}</td>
                </tr>
                <tr>
                  <th>Room Number</th>
                  <td>{room_number}</td>
                </tr>
                <tr>
                  <th>Check In Date</th>
                  <td>{check_in}</td>
                </tr>
                <tr>
                  <th>Check Out Date</th>
                  <td>{check_out}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer className="card-footer">
          <Link to={`/edit-camper/${id}`} className="card-footer-item">
            Edit
          </Link>
          <a onClick={removeCamper} className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
    );
  };

const mapDispatchToProps={
    deleteCamper: deleteCamper,
}

export default connect(null, mapDispatchToProps)(Person);
