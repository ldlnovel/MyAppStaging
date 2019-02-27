import { stringify } from 'qs';
import { errorModal } from './/utils'
import axios from 'axios';

const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
export default function axiosRequest(url, params, method, callback) {
  // // console.log('params>', params)
  if (method.type) {
    return axios[method.type.toLowerCase()](url, stringify(params), headers).then(res => {
      if (res && res.status === 200) {
        return callback ? callback(res.data) : res.data
      }
    }, err => {
      return callback ? callback(err) : err
    }).catch((error) => {
      errorModal('提示', '系统错误')
      return false
    })
  } else {
    return axios.get(`${url}`, { params }).then(res => {
      if (res && res.status === 200) {
        return callback ? callback(res.data) : res.data
      }
    }, err => {
      return callback ? callback() : err
    }).catch((error) => {
      errorModal('提示', '系统错误')
    })
  }
}
