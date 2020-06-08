import { createStore } from "redux"

const initState = {
  jam: 0
}

const jamReducer = (state = initState, action) => {
  if (action.type === "EAT_JAM") {
    return {
      ...state,
      jam: state.jam + action.jam,
      lastAccess: new Date()
    }
  } else if (action.type === "STACK_JAM") {
    return Object.assign({}, state, { jam: state.jam - action.jam })
  }
  return state
}

const store = createStore(jamReducer)

export default store