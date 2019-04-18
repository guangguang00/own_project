import {createStore ,applyMiddleware} from 'redux'
// import * as home from '@/components/home/reducer'
// import * as personal from '@/components/personal/reducer'
import rootReducer from './rootReducer'

import thunk from 'redux-thunk'

let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;