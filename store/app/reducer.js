import { SET_LOADING, SET_ERROR } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: null,
}

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        hasError: action.payload.value,
        errorMessage: action.payload.error,
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.value,
      }

    default:
      return state
  }
}
