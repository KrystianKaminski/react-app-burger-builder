import { createStore } from 'redux'
import burgerBuilderReducer from './reducers/burgerBuilder'

const store = createStore(burgerBuilderReducer)

export default store