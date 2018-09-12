import axios from 'axios'
import store from '../../_store'
import { navigator } from '../../_common/utils'
const appId = 'EA19CF090BC25757D7607A4C9442CE5A';
import { MessageBox } from "element-ui";

const instance = axios.create({
  timeout: 1000 * 15
})

const toLogin = () => {
  navigator('/login/login_index')
}
const errHandler = (status, other) => {
  switch (status) {
    case 401:
      break
    case 403:
      break
    // 404请求不存在
    case 404:
      // tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.interceptors.request.use(config => {
  config.headers.appId = appId;
  const token = store.state.user;
  token && (config.headers.publicKey = token)
  return config
}, error => {
  return Promise.error(error)
})
instance.interceptors.response.use(
  res => {
    if (res.data.status === 0) {
      return res.data
    } else if (res.data.status === 1) {
      return res.data
    } else if (res.data.status === 2) {
      toLogin();
    } else if (res.data.status === 4) {
      MessageBox.alert('此账户在别处登录', '', {
        confirmButtonText: '确定',
        callback: action => {
          toLogin()
        }
      });
    } else {
      return res
    }
  },
  error => {
    const { response } = error
    if (response) {
      errHandler(response.status, response.data.message)
    } else {
      /*断网*/
      console.log(error);
    }
  }
)
export default instance
