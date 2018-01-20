import { SHOW_MODAL, HIDE_MODAL } from '../actions';

const initialState = {
  visible: false,
  config: {},
};

const modal = (state = initialState, action) => {
  
  switch(action.type) {

    case SHOW_MODAL:
      return Object.assign({}, state, action.payload);

    case HIDE_MODAL:
      return Object.assign({}, state, action.payload);

    default:
      return state;

  }

};

export default modal;