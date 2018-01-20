import { 
  PROCESS_CONTACT_DATA,
  ADD_CONTACT_INFO_TEMPLATE,
  ENABLE_EDITING, 
  DISABLE_EDITING,
  UPDATE_INPUT,
  SAVE_CHANGES,
  CANCEL_CHANGES,
} from '../actions';

const initialState = {
  info: {
    displayName: ''
  },
  savedInfo: {},
  template: [],
  isEditing: false,
};

const contactInfo = (state = initialState, action) => {
  
  switch(action.type) {

    case PROCESS_CONTACT_DATA:
      return Object.assign({}, state, action.payload);

    case ADD_CONTACT_INFO_TEMPLATE:
    return Object.assign({}, state, action.payload);
      
    case ENABLE_EDITING:
      return Object.assign({}, state, action.payload);

    case DISABLE_EDITING:
      return Object.assign({}, state, action.payload);

    case UPDATE_INPUT:
      return Object.assign({}, state, action.payload);

    case SAVE_CHANGES:
      return Object.assign({}, state, action.payload);

    case CANCEL_CHANGES:
      return Object.assign({}, state, action.payload);

    default:
      return state;

  }

};

export default contactInfo;