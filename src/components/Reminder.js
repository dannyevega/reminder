import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, removeReminder, clearReminders } from '../actions';
import moment from 'moment';
import '../index.css';

class Reminder extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
      dueDate: ''
    }
  }

  handleChange = (e) => {
    let value = e.target.value ? e.target.value : '';
    this.setState({ value });
  }

  handleDate = (e) => {
    let dueDate = e.target.value ? e.target.value : '';
    this.setState({ dueDate });
  }  

  addReminder = (e) => {
    e.preventDefault();
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.value, this.state.dueDate);
  }

  removeReminder = (id) => {
    this.props.removeReminder(id);
  }

  renderReminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map(reminder => {
          return (
            <li className="list-group-item" key={reminder.id}>
              <div className="list-item">
                <div>{reminder.text}</div>
                <div><em>{moment(new Date(reminder.dueDate)).format('MMMM Do YYYY, hh:mm:ss a')}</em></div>
              </div>
              <div 
                className="list-item delete-button"
                onClick={() => this.removeReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="reminder">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={this.handleChange}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={this.handleDate}
            />            
          </div>          
          <button
            type="button"
            className="btn btn-success"
            onClick={this.addReminder}
          >
            Add Reminder
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.clearReminders()}
          >
            Clear
          </button>          
        </div>
        {this.renderReminders()}       
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, removeReminder, clearReminders })(Reminder);
