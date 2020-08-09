import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;