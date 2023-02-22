// store.js
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookingReducer from './bookingReducer';
// create the store
const store = createStore(bookingReducer,composeWithDevTools());

export default store;
