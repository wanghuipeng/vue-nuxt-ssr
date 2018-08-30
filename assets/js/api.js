// 设置axios,process.env值是根据用户是测试还是生产来读取config中的dev.env和pro.env中的配置
import axios from 'axios'
import { Message } from "element-ui";
console.log(process.env)
axios.defaults.baseURL = process.env.API_ROOT
axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = ''
    //axios.defaults.headers.common['Authorization'] = 'a3867bdd76ee4840967a54e735ac70cb'; //process.env.API_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    // 测试
axios.interceptors.request.use(function(request) {
    // 判断本地是否有token值，有则从新设置token，没有使用token默认配置
    let moveToken = localStorage.getItem('token')

    if (moveToken) {
        request.headers.Authorization = `${moveToken}`
    };
    return request
}, function(error) {
    // 请求错误时做些事
    return Promise.reject(error)
})

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        console.log(response)
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                //登录过期（token失效）
                case 101011:
                    // 这里写清除token的代码
                    this.$router.replace({
                        path: 'login'
                    })
            }
        }
        return Promise.reject(error.response.data)
    });


export default axios
const getAxios = (method, url, params) => {
    switch (method) {
        case 'get':
            return axios[method](url, { params: params }).catch((error) => {
                if (error.response) {
                    let message = error.response.data.error
                    Message({
                        showClose: true,
                        message,
                        type: "error",
                        duration: 2000
                    });
                    console.log('请求已发出，但服务器响应的状态码不在 2xx 范围内')
                    return error.response
                } else {
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
        case 'post':
            return axios[method](url, params, { emulateJson: true }).catch((error) => {
                if (error.response) {
                    let message = error.response.data.error
                    Message({
                        showClose: true,
                        message,
                        type: "error",
                        duration: 2000
                    });
                    console.log('请求已发出，但服务器响应的状态码不在 2xx 范围内')
                    return error.response
                } else {
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
        case 'put':
            return axios[method](url, params, { emulateJson: true }).catch((error) => {
                if (error.response) {
                    return error.response
                } else {
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
        default:
            return axios[method](url, { params: params }).catch((error) => {
                if (error.response) {
                    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                    console.log('请求已发出，但服务器响应的状态码不在 2xx 范围内')
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
    }
}

// 后台接口配置
const config = {
    mock: 'https://www.easy-mock.com/mock/5af2adfe086dd715d58ab87a/avatar-backend',
}

//设置响应数据为文件流
var instance = axios.create({
    responseType: 'blob' //返回数据的格式，可选值为arraybuffer,blob,document,json,text,stream，默认值为json
});

export const instance1 = axios.create({
    responseType: 'blob' //返回数据的格式，可选值为arraybuffer,blob,document,json,text,stream，默认值为json
});


// 登录
export const login = params => {
    return getAxios('get', config.mock + '/api/v1/getModuleAuthBySystemName', params).then(res => res.data)
}