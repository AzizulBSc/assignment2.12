import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
// create our first middleware
const myLogger = (store)=>(next)=>(action)=>{
  console.log(`Action:${JSON.stringify(action)}`);
  console.log(`Before:${JSON.stringify(store.getState())}`);
  return next(action);
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger)));

export default store;
