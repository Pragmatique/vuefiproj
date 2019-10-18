import { HTTP } from './common'
export const Dictionary = {
  createContact (config) {
    return HTTP.post('/dictionary/contact/', config).then(response => {
      return response.data
    })
  },
  deleteContact (id) {
    return HTTP.delete(`/dictionary/contact/${id}/`)
  },
  getContact (id) {
    return HTTP.get(`/dictionary/contact/${id}/`)
  },
  listContact () {
    return HTTP.get('/dictionary/contact/').then(response => {
      return response.data
    })
  },
}
