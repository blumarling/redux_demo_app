import {STORE_ACTIVITIES, DELETE_ACTIVITIES} from "./types"
import axios from 'axios'

// file delle action: dovrebbe bastare questo a separare la logica dalla view
// tutte le action che vengono chiamate devono essere chiamate col dispatch
// affinché si portino dietro il "dispatch"
// e il get state
// se una di queste azioni ritorna un oggetto con una chiave "type" viene letta dal reducer

export const getActivities = () => {
  //thunk torna una funzione asincrona dove fare la chiamata
  return async (dispatch, getState) => {
    try {
      const result = await axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0')
      //al termine possiamo chiamare un'altra api
      dispatch(getActivitiesSecondaChiamata())     
      dispatch(storeActivities(result.data))
    } catch (e) {
  
    }
  }
}

const getActivitiesSecondaChiamata = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get('https://api.musement.com/api/v3/venues/163/activities?limit=6&offset=0')
      dispatch(storeActivities(result.data))
    } catch (e) {
  
    }
  }
}

// questa funzione torna un oggetto con type, viene letta dal reducer
const storeActivities = ((payload) => ({
  type: STORE_ACTIVITIES,
  payload
}))