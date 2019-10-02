import { HTTP } from './common'
export const Dictionary = {
  createProjectStatus (config) {
    return HTTP.post('/dictionary/project-status/', config).then(response => {
      return response.data
    })
  },
  deleteProjectStatus (id) {
    return HTTP.delete(`/dictionary/project-status/${id}/`)
  },
  getProjectStatus (id) {
    return HTTP.get(`/dictionary/project-status/${id}/`)
  },
  listProjectStatus () {
    return HTTP.get('/dictionary/project-status/').then(response => {
      return response.data
    })
  },

  createPropertyType (config) {
    return HTTP.post('/dictionary/property-type/', config).then(response => {
      return response.data
    })
  },
  deletePropertyType (id) {
    return HTTP.delete(`/dictionary/property-type/${id}/`)
  },
  getPropertyType (id) {
    return HTTP.get(`/dictionary/property-type/${id}/`)
  },
  listPropertyTypes () {
    return HTTP.get('/dictionary/property-type/').then(response => {
      return response.data
    })
  },


}
