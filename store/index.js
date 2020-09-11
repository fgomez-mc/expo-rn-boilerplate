import { createStore, applyMiddleware, combineReducers } from 'redux'
import appReducer from './app/reducer'
import projectsReducer from './projects/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  app: appReducer,
  projects: projectsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
