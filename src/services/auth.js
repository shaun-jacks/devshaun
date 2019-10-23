import setAuthToken from "../utils/setAuthToken"
import axios from "axios"
import jwt_decode from "jwt-decode"
import _ from "lodash"

export const decodeToken = () => {
  if (typeof window !== "undefined" && window.localStorage.getItem("token")) {
    try {
      const jwt = window.localStorage.getItem("token")
      const user = jwt_decode(jwt)
      return user
    } catch (err) {
      console.log(err)
      return {}
    }
  }
}

export const setUser = () => {
  let user = decodeToken()
  user = JSON.stringify(user)
  window.localStorage.setItem("gatsbyUser", user)
}

export const getUser = () => {
  let user = window.localStorage.getItem("gatsbyUser")
  user = JSON.parse(user)
  if (!_.isEmpty(user)) {
    return user
  }
  return {}
}

export const logout = () => {
  window.localStorage.removeItem("token")
  window.localStorage.removeItem("gatsbyUser")
  setAuthToken(false)
}

export const handleLogin = async (access_token, serverEndpoint, provider) => {
  return new Promise(async (resolve, reject) => {
    const res = await axios.post(`${serverEndpoint}/api/auth/${provider}`, {
      access_token: access_token,
    })
    const jwt = res.headers["x-auth-token"]
    let user
    // decode and verify token
    try {
      user = jwt_decode(jwt)
      setAuthToken(jwt)
      if (window !== undefined) {
        localStorage.setItem("token", jwt)
      }
    } catch (err) {
      return reject(err)
    }
    localStorage.setItem("gatsbyUser", JSON.stringify(user))
    return resolve()
  })
}

export const isLoggedIn = () => {
  let user = window.localStorage.getItem("gatsbyUser")
  user = JSON.parse(user)
  return !_.isEmpty(user)
}
