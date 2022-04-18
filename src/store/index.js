import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import carReducer from './reducers/carReducer'

// menggabungkan reducer sehingga mudah untuk dipanggil
const rootReducer = combineReducers({
  carReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store