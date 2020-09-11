import { SET_PROJECTS } from './types'

const initialState = {
  data: [],
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        data: action.payload.projects,
      }
    default: {
      return state || initialState
    }
  }
}
