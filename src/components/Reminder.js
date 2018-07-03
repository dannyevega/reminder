import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
import '../index.css';

class Reminder extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    let value = e.target.value ? e.target.value : '';
    this.setState({ value });
  }

  addReminder = (e) => {
    e.preventDefault();    
    this.props.addReminder(this.state.value);
  }

  render() {
    return (
      <div className="reminder">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={this.handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.addReminder}
          >
            Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addReminder })(Reminder);