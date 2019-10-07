import {combineReducers} from 'redux'
// ogni reducer importato qui
import activities from './activities/reducer'

export default combineReducers({
  // e inserito nel combine ogni reducer è una chiave dello store
  activities,
})
