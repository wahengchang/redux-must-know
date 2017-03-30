import { createStore, combineReducers } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}
function prefixTodos(state = [], action) {
  switch (action.type) {
    case 'PRE_ADD_TODO':
      return state.concat([ 'pre_'+action.text ])
    default:
      return state
  }
}

const mixReducers= combineReducers({todos, prefixTodos})
let store = createStore(mixReducers, [ 'Use Redux' ])

store.subscribe(() =>
  console.log('listening ......', store.getState())
)

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'Second todo'
})

store.dispatch({
  type: 'PRE_ADD_TODO',
  text: 'Third todo'
})

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]