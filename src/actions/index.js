import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

export const removeReminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    id
  }
  console.log('removing reminder in actions', action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDER
  }
}