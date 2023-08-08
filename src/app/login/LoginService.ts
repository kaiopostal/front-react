import { api } from '../../services/axios'
import UseApi from '../../composables/UseApi'
import { Form } from './Interface'
/* eslint-disable */
export default function loginService () {
  const { csrfCookie } = UseApi()

  const post = async (form : Form ) => {
    try {
      const data: object = await csrfCookie().then(async () => {
      
        const { data } = await api.post('/api/login', form)
      return data
      })
      return data 
    } catch (e) {
      throw e
    }
  }

  return {
    post
  }
}
