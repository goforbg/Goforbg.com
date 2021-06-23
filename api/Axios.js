const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://57722.wayscript.io',
  timeout: 7000,
})

export default instance
