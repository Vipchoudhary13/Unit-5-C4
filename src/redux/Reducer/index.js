import {combineReducers} from 'redux'
import { queryReducer } from './query';


export const rootReducer = combineReducers({
     queryState: queryReducer
})