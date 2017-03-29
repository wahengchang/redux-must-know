


## `createStore(reducer, [preloadedState], [enhancer])` (Ref)[https://github.com/reactjs/redux/edit/master/docs/api/createStore.md]
Creates a Redux [store](Store.md) that holds the complete state tree of your app.  
There should only be a single store in your app.

#### Arguments
1. `reducer` *(Function)*: A [reducing function](../Glossary.md#reducer) that returns the next [state tree](../Glossary.md#state), given the current state tree and an [action](../Glossary.md#action) to handle.
2. [`preloadedState`] *(any)*: The initial state.
3. [`enhancer`] *(Function)*: 



## `subscribe(listener)` (Ref)[http://redux.js.org/docs/api/Store.html#subscribe]
1. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed.
2. Call getState() to read the current state tree inside the callback.


## `dispatch(action)` (Ref)[http://redux.js.org/docs/api/Store.html]
1. This is the only way to trigger a state change.
2. The store's reducing function will be called.
