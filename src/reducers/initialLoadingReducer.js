import { INITIAL_LOADING } from '../actions';

export default (state = true, action) => {
  switch (action.type) {
    case INITIAL_LOADING:
      return action.payload;
    default:
      return state;
  }
};
