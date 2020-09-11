import { SET_LOADING, SET_ERROR } from './types'

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: { value },
})

export const setError = (value, error = null) => ({
  type: SET_ERROR,
  payload: { value, error },
})
