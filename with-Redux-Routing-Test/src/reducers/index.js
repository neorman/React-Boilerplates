import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducers from './home'

export default combineReducers({
  router: routerReducer,
  homeReducers
})
