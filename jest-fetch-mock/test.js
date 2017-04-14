
import configureMockStore from 'redux-mock-store' // mock store 
import thunk from 'redux-thunk'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

// **
//Target function which we are going to test
// **
// Needed to wraped inside a actionCreator Middleware
// **
var getAccessToken = () => (dispatch, store)=> {
    return fetch('http://abc.com.tw')
}


describe('Access token action creators', () => {
  it('dispatches the correct actions on successful fetch request', () => {
 
// **
// Mock 'every' http response
// **
    fetch.mockResponse(JSON.stringify({access_token: '12345' }))
 
    const expectedActions = [
      { type: 'SET_ACCESS_TOKEN', token: {access_token: '12345'}}
    ]

// **
// Target actionCreator is passed inside a dispatch function
// **
    const store = mockStore({ config: {token: "" } })
    return store.dispatch(getAccessToken())
      //getAccessToken contains the fetch call 
      .then(() => { // return of async actions 
        expect(store.getActions()).toEqual(expectedActions)
      })
 
  });
})
