const redux = require('redux')
const createStore = redux.configureStore

const BUY_CAKE = 'BUY_CAKE'
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

const initialState = {
  numCakes: 10
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numCakes: state.numCakes-1
    }
    default: return state
  }
}

const store = createStore(reducer)
console.log('initial state',store.getState())