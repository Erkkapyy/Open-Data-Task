import axios from "axios"
const dataApiUrl = "https://opendata.hopefully.works/api"
const baseUrl = "/api/data"

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getData = async () => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.get(`${dataApiUrl}/events`, config)

  return response.data
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const getHistory = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getData, setToken, create, getHistory }
