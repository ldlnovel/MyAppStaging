import { Modal } from 'antd';
import axios from 'axios';
/***
 * 
 * 私有方法
 * 
 * 
 * ****/
export function successModal(title, info) {
  const modal = Modal.success({
    title: title,
    content: info,
  });
  setTimeout(() => modal.destroy(), 1500);
}

export function errorModal(title, info) {
  const modal = Modal.error({
    title: title,
    content: info,
  });
  setTimeout(() => modal.destroy(), 4000);
}

export function slotfromDataformat(timeslotlist = {}) {
  let obj = {
    time: '总量',
    monNum: 0,
    tueNum: 0,
    wedNum: 0,
    thuNum: 0,
    friNum: 0,
    satNum: 0,
    sunNum: 0,
  }
  let arr =  Object.values(timeslotlist)
  arr.map(item => {
    obj.monNum += item.monNum
    obj.sunNum += item.sunNum
    obj.tueNum += item.tueNum
    obj.wedNum += item.wedNum
    obj.thuNum += item.thuNum
    obj.friNum += item.friNum
    obj.satNum += item.satNum
    obj.total = obj.monNum + obj.tueNum + obj.wedNum + obj.thuNum + obj.friNum + obj.satNum + obj.sunNum
    item.total = item.monNum + item.tueNum + item.wedNum + item.thuNum + item.friNum + item.satNum + item.sunNum
  })
  arr.push(obj)
  return arr
}



/**
 * 上传
 */
export function _upload(url, formdata, callback) {
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(url, formdata, config).then(res => {
    if (res && res.status === 200) {
      return callback ? callback(res.data) : res.data
    }
  }, err => {
    return callback ? callback(err) : err
  })
}


/**
 * 分钟 转换小时
 */
export function ChangeHourMinutestr(str) {
  if (str > 1440) {
    str = str - 1440
  }
  if (str !== "0" && str !== "" && str !== null) {
    return ((Math.floor(str / 60)).toString().length < 2 ? "0" + (Math.floor(str / 60)).toString() :
      (Math.floor(str / 60)).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + (str % 60).toString() : (str % 60).toString());
  } else {
    return "";
  }
}

