import axios from 'axios'

const apiUrl = 'https://jsonplaceholder.typicode.com/'
const timeout = 1000 * 25
const baseURL = apiUrl
const instance = axios.create({
  timeout,
  baseURL,
})

export default instance
