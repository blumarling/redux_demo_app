import { STORE_ACTIVITIES, DELETE_ACTIVITIES } from "./types"

// qua dovrebbe rimanere solo la logica del reducer

export default (state = [], action) => {
  switch (action.type) {
    case STORE_ACTIVITIES:
      return [
        ...state,
        ...action.payload
      ]
    case DELETE_ACTIVITIES:
      return []
    default:
      return state
  }
}