import { configureStore, combineReducers } from '@reduxjs/toolkit'
import quoteReducer from './reducers'

const bigReducer = combineReducers({
    quote: quoteReducer
})

const store = configureStore({
    reducer: bigReducer
})

export default store