
import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost/api/' })

api.defaults.withCredentials = true

api.defaults.headers.post['Content-Type'] = 'application/json';

export { api }
