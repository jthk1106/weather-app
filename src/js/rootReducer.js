/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import SelectReducer from './components/selectLocation/select-reducer';

const rootReducer = combineReducers({
// add reducers
  select: SelectReducer
});

export default rootReducer;
