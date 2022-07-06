import { likesReducer } from './likesReducer'
import { inputReducer } from './inputReducer'
import { combineReducers } from 'redux'
import { commentsReducer } from './commentsReducer'

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
})
