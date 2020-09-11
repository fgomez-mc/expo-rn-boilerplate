import { actionHandler } from '../../utils/actionHandler'
import { SET_PROJECTS } from './types'
import axios from '../../utils/axios'

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: { projects },
})

export const handleGetProjects = () => async (dispatch) => {
  const api = () => axios.get('posts')
  actionHandler(api, null, dispatch, null, setProjects)
}
