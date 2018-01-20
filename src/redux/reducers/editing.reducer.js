import {
  BEGIN_EDITING,
  DONE_EDITING,
} from '../actions';

const initialState = {
  isEditing: false,
};

const editing = (state = initialState, action) => {
  
  switch(action.type) {

    case BEGIN_EDITING:
      return Object.assign({}, state, action.payload);

    case DONE_EDITING:
      return Object.assign({}, state, action.payload);

    default:
      return state;

  }

};

export default editing;