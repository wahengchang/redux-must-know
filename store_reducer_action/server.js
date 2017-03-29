import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

let store = createStore(todos, [ 'Use Redux' ])

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

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]