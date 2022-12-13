import axios from 'axios'

const sendAxios = axios.create({
  baseURL: 'http://localhost:4000/api/'
})

export default sendAxios