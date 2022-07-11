# REDUX-DEMO

# GETTING STARTED
- npm init --yes
- npm install redux
- Create a JS file within the app
- From the terminal run 'node filename'

# CORE CONCEPTS OF REDUX
- Store
- Action
- Reducer

# PRINCIPLES OF REDUX
- The state of your whole application is stored in an object tree within a single store
- The only way to change the state is to emit an action, an object describing what happened. (You are not allowed to directly update the state object)
- To specify how the state tree is transformed by actions, you write pure reducers

# ACTION
- An action is an object with type property

# REDUCERS
- Specify how the app's state changes in response to the actions sent to the store
- Function that accepts state and action as arguments and returns the next state of the   application

  (previousState,action) => newState

