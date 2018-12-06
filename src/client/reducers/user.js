import { SIGNUP_START } from '../actions/types';

const user = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return state;
    default:
      return state;
  }
};

export default user;
