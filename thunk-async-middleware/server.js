import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';

var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}



function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

// let store = createStore(todos, [ 'Use Redux' ])

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
var store = createStoreWithMiddleware(todos, [ 'Use Redux' ]);


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

function loadReposAction() {
    return function (dispatch, getState) {
        var state = getState();

        console.log('state: ', state)

        return genPromist(3).then(function(re1){
            store.dispatch({
                type: 'ADD_TODO',
                text: re1 + ' todo'
            })
        })
    }
}


store.dispatch(loadReposAction())

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]