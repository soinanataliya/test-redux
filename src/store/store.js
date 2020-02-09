import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import counterReducer from "./reducers";

const store = createStore(
  counterReducer,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__
  //   ? compose(
  //       applyMiddleware(thunk),
  //       window.__REDUX_DEVTOOLS_EXTENSION__()
  //     )
  //   : applyMiddleware(thunk)
);

export default store;
