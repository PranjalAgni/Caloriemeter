import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import calorieReducer from '../reducers/Calorie';

const rootReducer = combineReducers(
  { calorie: calorieReducer }
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
// export default configureStore;
