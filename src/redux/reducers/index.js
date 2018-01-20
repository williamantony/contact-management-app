import { combineReducers } from 'redux';

import modal from './modal.reducer';
import filter from './filter.reducer';
import editing from './editing.reducer';

export default combineReducers({
  modal,
  filter,
  editing,
});