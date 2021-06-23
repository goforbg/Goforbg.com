import axios from './Axios.js'

export const sendEmail = async (name, email, message) => {
  return await axios.post('/contact', {
    name: name,
    email: email,
    message: message,
  })
}
