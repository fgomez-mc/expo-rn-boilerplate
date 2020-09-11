import { setLoading, setError } from '../store/app/actions'

export const actionHandler = async (
  apiCall = () => {},
  data = {},
  dispatch = () => {},
  redirect = false,
  cb = () => {}
) => {
  // set initial loading state
  dispatch(setLoading(true))
  try {
    // call api
    const result = await apiCall(data)
    dispatch(setLoading(false))
    dispatch(cb(result.data))
    if (redirect) {redirect()}
    /*
    // extra validation can be added here to match api responses
    if (result.success) {
     // execute action
    } else {
      // handle error
      dispatch(setError(true, result.error))
    }
    */
  } catch (err) {
    dispatch(setLoading(false))
    dispatch(setError(true, err.error))
  }
}
