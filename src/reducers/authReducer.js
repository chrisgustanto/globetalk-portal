import { FIRE_AUTH } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case FIRE_AUTH:
      return action.payload;
    default:
      return state;
  }
};
