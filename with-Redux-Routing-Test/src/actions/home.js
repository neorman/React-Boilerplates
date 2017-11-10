
import * as type from '../actionTypes/home';

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}


export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT
    })
  }
}
