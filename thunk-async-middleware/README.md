# thunk
 *Why thunk*
 - Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
 - An action creator that returns a function to perform asynchronous dispatch.
 - 

#### Install 
```
$ npm install --save redux-thunk
```

#### Create Store
```js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Normal store
// var store = createStore(todos, [ 'Use Redux' ])

// Thunk as middleware store
var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
var store = createStoreWithMiddleware(todos, [ 'Use Redux' ]);
```

#### Action creator
An action creator that returns a function to perform conditional dispatch:
```js
function asyncAction() {
    return function (dispatch, getState) {
        return asyncFun().then(
            () => {return store.dispatch({type: 'SOME_REDUCER_1'})}
            () => {return store.dispatch({type: 'SOME_REDUCER_2'})}
            () => {return store.dispatch({type: 'SOME_REDUCER_3'})}
        })
    }
}
store.dispatch(asyncAction())
```


## Referece
 - [https://github.com/gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)
 - [https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3](https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3)