import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { Path } from "./Path"

const axiosJWT = axios.create()

const functionRefreshToken = async (user) => {
  try {
    const response = await axios.post(Path.refreshTokenUrl, user, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.data.data || null
  } catch (error) {
    console.error("refreshToken Error:", error)
    return null
  }
}

axiosJWT.interceptors.request.use(
  async config => {
    const localStorageUser = localStorage.getItem("userSmartCD")
    const user = localStorageUser ? JSON.parse(localStorageUser) : null
    if (!user) return config

    const decodedToken = jwtDecode(user.AccessToken)
    const currentDate = Date.now() / 1000

    if (decodedToken.exp < currentDate) {
      const data = await functionRefreshToken(user)
      if (data) {
        const updatedUser = {
          ...user,
          AccessToken: data.AccessToken,
        }

        localStorage.setItem("user", JSON.stringify(updatedUser))
        config.headers["Authorization"] = `Bearer ${data.AccessToken}`
      } else {
        localStorage.clear()
      }
    } else {
      config.headers["Authorization"] = `Bearer ${user.AccessToken}`
    }

    return config
  },
  error => Promise.reject(error)
)

const handleResponse = (res, handleData) => {
  const obj = {
    status: res.status,
    message: res.data.message || "Operation completed successfully.",
    data: res.data.data || res.data,
  }
  handleData(obj)
}

const handleError = (e, handleData) => {
  handleData({
    status: e.response?.status || 500,
    message: e.response?.data?.message || "An error occurred.",
    data: null,
    error: e.response.data.error || 'Unknown error',
  })
}

export const GET_DATA = (Url, handleData, params = false, token = false) => {
  axiosJWT.get(Url, {
    params: { ...params },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => handleResponse(res, handleData))
    .catch(e => handleError(e, handleData))
}

export const POST_JSON = (Url, Data, handleData, token = false, params = false) => {
  axiosJWT.post(Url, Data, {
    params: { ...params },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => handleResponse(res, handleData))
    .catch(e => handleError(e, handleData))
}

export const POST_FORM = (Url, Data, handleData, token = false, params = false) => {
  axiosJWT.post(Url, Data, {
    params: { ...params },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(res => handleResponse(res, handleData))
    .catch(e => handleError(e, handleData))
}

export const POST_XML = (url, xml, handleData, params) => {
  axios.post(url, xml, {
    params: { ...params },
    headers: { "Content-Type": "text/xml" },
  })
    .then(res => handleResponse(res, handleData))
    .catch(err => handleError(err, handleData))
}

export const LANGUAGE = (Url, Data, handleData, token = false, params = false) => {
  axios
    .post(Url, Data, {
      params: { ...params },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      const obj = {
        data: res.data,
        status: res.status,
      }
      handleData(obj)
    })
    .catch(e => {
      handleData(e.response)
    })
}
