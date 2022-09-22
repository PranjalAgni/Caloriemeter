import { createStore, combineReducers } from 'redux';
import calorieReducer from '../reducers/Calorie';

const rootReducer = combineReducers(
  { calorie: calorieReducer }
);
const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
