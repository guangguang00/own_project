import {combineReducers} from 'redux'
import * as home from '@/components/home/reducer'
import * as personal from '@/components/personal/reducer'
import * as login from '@/components/login/reducer'



const rootReducer = combineReducers({...home,...personal,...login})
    


export  default rootReducer;