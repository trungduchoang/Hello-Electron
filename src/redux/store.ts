// libs
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
// reducers
import * as reducers from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  ...reducers,
});

const composeWithDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeWithDevTool(applyMiddleware(thunk)),
);

export type TRootReducer = ReturnType<typeof rootReducer>;
export type TPageReducer = keyof TRootReducer;
export { store };
