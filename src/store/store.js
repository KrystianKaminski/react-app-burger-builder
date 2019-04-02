import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import burgerBuilderReducer from './reducers/burgerBuilder'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(burgerBuilderReducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store