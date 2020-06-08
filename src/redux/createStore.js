import { createStore as reduxCreateStore } from "redux"

const initState = {
  jam: 0
}

const jamReducer = (state, action) => {
  if (action.type === "EAT_JAM") {
    return {
      ...state,
      jam: state.jam - action.jam,
      lastAccess: new Date()
    }
  } else if (action.type === "STACK_JAM") {
    return Object.assign({}, state, { jam: state.jam + action.jam })
  }
  return state
}

const createStore = () => reduxCreateStore(jamReducer, initState)

export default createStore