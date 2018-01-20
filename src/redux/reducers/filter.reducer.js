import {
  UPDATE_FILTER_INPUT,
} from '../actions';

const initialState = {
  input: '',
  visible: false
};

const filter = (state = initialState, action) => {
  
  switch(action.type) {

    case UPDATE_FILTER_INPUT:
      return Object.assign({}, state, action.payload);

    default:
      return state;

  }

};

export default filter;