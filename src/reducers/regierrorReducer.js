import { FIRE_REGI_ERROR } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case FIRE_REGI_ERROR:
      return action.payload;
    default:
      return state;
  }
};
