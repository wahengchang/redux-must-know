# Example of jest-fetch-mock
Using jest-fetch-mock to mock http response, fetch()

#### Install & Preparation 
```
$ npm install --save-dev jest-fetch-mock
```

Create a __*setupJest file*__ :
```
//setupJest.js 
global.fetch = require('jest-fetch-mock');
```

Add the setupFile to your jest config in package.json:
```
"jest": {
  "automock": false,
  "setupFiles": [
    "./setupJest.js"
  ]
}
```


#### Example 
Include file
```js
import configureMockStore from 'redux-mock-store' // mock store 
import thunk from 'redux-thunk'
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
```


Target function is wraped inside actionCreator Middleware
```js
var getAccessToken = () => (dispatch, store)=> {
    return fetch('http://abc.com.tw')
}
```

**Mock response**

`fetch.mockResponse(body, init)` - Mock all fetch calls

```js
fetch.mockResponse(JSON.stringify({access_token: '12345' }))
```

**Executive target function**
```js
    const store = mockStore({ config: {token: "" } })
    return store.dispatch(getAccessToken())
      //getAccessToken contains the fetch call 
      .then(() => { // return of async actions 
        expect(store.getActions()).toEqual(expectedActions)
      })
```



[jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock)