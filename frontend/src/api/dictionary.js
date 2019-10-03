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

  createServiceType (config) {
    return HTTP.post('/dictionary/service-type/', config).then(response => {
      return response.data
    })
  },
  deleteServiceType (id) {
    return HTTP.delete(`/dictionary/service-type/${id}/`)
  },
  getServiceType (id) {
    return HTTP.get(`/dictionary/service-type/${id}/`)
  },
  listServiceTypes () {
    return HTTP.get('/dictionary/service-type/').then(response => {
      return response.data
    })
  },

  createObjectType (config) {
    return HTTP.post('/dictionary/object-type/', config).then(response => {
      return response.data
    })
  },
  deleteObjectType (id) {
    return HTTP.delete(`/dictionary/object-type/${id}/`)
  },
  getObjectType (id) {
    return HTTP.get(`/dictionary/object-type/${id}/`)
  },
  listObjectTypes () {
    return HTTP.get('/dictionary/object-type/').then(response => {
      return response.data
    })
  },


}
