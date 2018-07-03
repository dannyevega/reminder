import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
  const { text, dueDate } = action;
  return {
    text,
    dueDate,
    id: Date.now()
  }
}

const removeReminder = (state = [], id) => {
  const reminders = state.filter(reminder => {
    return reminder.id !== id;
  });
  console.log('removed reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders);
      return reminders;
    case REMOVE_REMINDER:
      reminders = removeReminder(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case CLEAR_REMINDER:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;      
    default:
      return state;
  }
}

export default reminders;