export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (modalConfig = {}) => {

  const payload = {
    visible: true,
    config: modalConfig,
  };

  return {
    type: SHOW_MODAL,
    payload,
  };

};

export const hideModal = () => {

  const payload = {
    visible: false,
  };

  return {
    type: HIDE_MODAL,
    payload,
  };

};





export const UPDATE_FILTER_INPUT = 'UPDATE_FILTER_INPUT';

export const updateFilterInput = (input) => {

  const payload = {
    input
  };

  return {
    type: UPDATE_FILTER_INPUT,
    payload,
  };

};




export const BEGIN_EDITING = 'BEGIN_EDITING';
export const DONE_EDITING = 'DONE_EDITING';

export const beginEditing = () => {

  const payload = {
    isEditing: true,
  };

  return {
    type: BEGIN_EDITING,
    payload,
  };

};

export const doneEditing = () => {

  const payload = {
    isEditing: false,
  };

  return {
    type: DONE_EDITING,
    payload,
  };

};

