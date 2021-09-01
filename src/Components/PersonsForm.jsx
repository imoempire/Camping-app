import React, { Component } from "react";
import { connect } from "react-redux";
import { addCamper } from "../Actions/AppActions";

class PersonsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
          camper_1: "",
          camper_2: "",
          number: "",
          email: "",
          room_number: "",
          check_in: "",
          check_out: "",
          message: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCamper(this.state);
    this.setState({
      camper_1: "",
      camper_2: "",
      number: "",
      email: "",
      room_number: "",
      check_in: "",
      check_out: "",
      message: "",
    });
    this.props.history.push("/");
  };

  handleGoBack = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container add-account-container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h4 className="has-text-centered is-size-4">ADD A NEW CAMPER</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Camper1</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="camper1's Name"
                    name="camper_1"
                    onChange={this.handleChange}
                    value={this.state.camper_1}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Camper2</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="camper1's Name"
                    name="camper_2"
                    onChange={this.handleChange}
                    value={this.state.camper_2}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Number of Campers</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Number of Campers"
                    name="number"
                    onChange={this.handleChange}
                    value={this.state.number}
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email input"
                    value={this.state.email}
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label">Room Number</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Room Number"
                    name="room_number"
                    onChange={this.handleChange}
                    value={this.state.room_number}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Check In</label>
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    placeholder="Check in date"
                    name="check_in"
                    onChange={this.handleChange}
                    value={this.state.check_in}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Check Out</label>
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    placeholder="Check Out date"
                    name="check_out"
                    onChange={this.handleChange}
                    value={this.state.check_out}
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button
                    onClick={this.handleSubmit}
                    type="submit"
                    className="button is-success is-rounded">
                    Submit
                  </button>
                </div>
                <div className="control">
                  <button
                    onClick={this.handleGoBack}
                    className="button is-link is-light"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addCamper: addCamper,
};

export default connect(null, mapDispatchToProps)(PersonsForm);
