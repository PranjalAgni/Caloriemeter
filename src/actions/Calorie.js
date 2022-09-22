import { ADD_CALORIE_DATA } from './constants';

export function addCalorie(payload) {
  return {
    type: ADD_CALORIE_DATA,
    payload,
  }
}