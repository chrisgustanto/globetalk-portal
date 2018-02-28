import { combineReducers } from 'redux';
import authReducer from './authReducer';
import regierrorReducer from './regierrorReducer';
import initialLoading from './initialLoadingReducer';


export default combineReducers({
  auth: authReducer,
  regiError: regierrorReducer,
  initialLoading: initialLoading
});
