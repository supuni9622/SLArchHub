import { combineReducers } from 'redux';

// We can combine data from different reducer files (ex- user_reducer, chat_reducer etc..)
import user from './user_reducer';
import chat from './chat_reducer';
import message from './message_reducer';

const rootReducer = combineReducers({
    user,
    chat,
    message
});

export default rootReducer;