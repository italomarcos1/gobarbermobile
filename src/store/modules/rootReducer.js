import { combineReducers } from 'redux';

// import { toastReducer } from 'react-native-redux-toast';
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({ auth, user });
