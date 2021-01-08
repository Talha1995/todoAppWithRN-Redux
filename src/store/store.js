import { createStore, combineReducers } from 'redux';
import foodReducer from "../reducers/foodReducers";

const rootReducer = combineReducers({
  foodReducer: foodReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;