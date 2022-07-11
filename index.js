// console.log("Hey, from index file")

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