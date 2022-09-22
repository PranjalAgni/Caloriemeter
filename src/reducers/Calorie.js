import { ADD_CALORIE_DATA, GET_CALORIE_DATA } from '../actions/Constants';
const initialState = {};

const calorieReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case ADD_CALORIE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CALORIE_DATA:
    default:
      return state;
  }
}
export default calorieReducer;
