import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, reduxFirestore, getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseconfig from './config/firebaseconfig';

firebase.initializeApp(firebaseconfig);
firebase.firestore();

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebase)
));

const rrfProps = {
  firebase,
  config: {userProfile: 'users', useFirestoreForProfile: true},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
