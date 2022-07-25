import API from './axios'
import Alert from "./alert"

class BACKEND {
  constructor() {
    this._API = API;
  }

   send({type, to, payload}) {
    Alert({
      type: "info",
      message: "Processing request...",
      timer: 5000
    })

    return this._API[type](to, payload).then(function (response) {

      if ([200, 201].includes(response.status)) {
        Alert({
          type: 'success',
          message: response.data.message
        })
        return response.data
      } else {
        Alert({
          type: 'error',
          message: response.data.message
        })
        return false
      }
    }).catch(function (e) {
       const err = "error"
      const message = e.message || e[err] || "Something went wrong";

      Alert({
        type: err,
        message
      })
      return false
    })
  }

  login(payload) {
    Alert({
      type: "info",
      message: "Signing in...",
      timer: 5000
    })

    return this.send({
      to: '/auth/login',
      type: "post",
      payload
    })

  }

  topUpBank(payload, pid, nid) {
    Alert({
      type: "info",
      message: "Processing request...",
      timer: 5000
    })

    return this.send({
      to: `/bank/topup/${pid}/?activityId=${nid}`,
      type: "put",
      payload
    })
  }

  delete(id) {
    return this.send({
      to: `/user/${id}`,
      type: "delete",
      payload: {}
    })

  }

  getActivities(payload) {
    return this.send({
      to: '/user/all/activities',
      type: "get",
    })
  }

  toggleSuspension(id) {
    const  res = this.send({
      to: `/user/enable-disable/${id}`,
      type: "post",
      payload: {}
    })

    return res
  }

  isAuthenticated() {
    return this._API.get('/user').then(function (response) {
      if (response?.status === 200) {
        return response.data
      } else {
        return false
      }
    }).catch(function (error) {
      console.log(error)
      return false
    })
  }

  getAllUsers ({limit, skip}={}){
    return this._API.get(`/user/all/?limit=${limit}&offset=${skip}`)
  }


  getUser() {

    return this._API.get('/user').then(function (response) {
      if (response.status === 200) {
        return response.data
      } else {
        return false
      }
    }).catch(function (error) {
      return false
    })
  }

  changePassword(payload) {
    console.log(payload)
    Alert({
      type: "info",
      message: "Processing request...",
      timer: 5000
    })

    return this.send({
      to: '/auth/change-password',
      type: "post",
      payload
    })
  }

  invest (payload) {
    Alert({
      type: "info",
      message: "Processing request...",
      timer: 5000
    })
    
    return this.send({
      to: '/bank/transaction',
      type: "post",
      payload
    })
  }
}

export default BACKEND;