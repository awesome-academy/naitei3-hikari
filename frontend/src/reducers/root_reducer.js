import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import followsReducer from './follows_reducer';
import chatReducer from './chat_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  chat: chatReducer,
  ui: uiReducer,
  follows: followsReducer,
  errors: errorsReducer
});
