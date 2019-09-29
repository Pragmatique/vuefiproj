import { HTTP } from './common'
export const Dictionary = {
  createProjectStatus (config) {
    return HTTP.post('/dictionary/project-status/', config).then(response => {
      return response.data
    })
  },
  deleteProjectStatus (statusid) {
    return HTTP.delete(`/dictionary/project-status/${statusid}/`)
  },
  getProjectStatus (statusid) {
    return HTTP.get(`/dictionary/project-status/${statusid}/`)
  },
  listProjectStatus () {
    return HTTP.get('/dictionary/project-status/').then(response => {
      return response.data
    })
  }
}
