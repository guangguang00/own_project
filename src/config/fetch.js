import axios from 'axios'
// import Vue from 'vue'
// import {baseUrl} from './env'

// import store from '../store/store'
axios.defaults.timeout = 10000
// axios.defaults.withCredentials=true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


// 请求拦截器
axios.interceptors.request.use((config) => {
    // showFullScreenLoading()
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  
  // 响应拦截器
axios.interceptors.response.use((response) => {
    // tryHideFullScreenLoading()
    return response
  }, (error) => {
    // tryHideFullScreenLoading()
    console.log(error,'请求错误')
    return Promise.reject(error)
  })
  
//  function showFullScreenLoading(){
//      store.commit('changeLoadingShow',true)
//  }
//  function tryHideFullScreenLoading(){
//     store.commit('changeLoadingShow',false)
//  }
//  setTimeout(()=>{tryHideFullScreenLoading()},10000)//6s之后将loading关闭
function fetch(url,params){
    
    return new Promise((resolve,reject)=>{
        let ret = ''
        for (let it in params) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(params[it]) + '&'
        }
        ret = params
        axios.post(url,ret)
            .then(response => {
                resolve(response.data)
            },err => {
                reject(err)
            })
            .catch((error)=>{
                reject(error)
            })
    })
}

export function post(url,param){
    var obj = {
        session_id:"tiqv5kj0ufplmdcc6r8mkmdiv5"
        // user_id:store.state.userId
      }
   
    return fetch(url,Object.assign({},obj,param))
    
}
export function get(url,param){
    return new Promise((resolve,reject)=>{
        let ret = ''
      
        axios.get(url,ret)
            .then(response => {
                resolve(response.data)
            },err => {
                reject(err)
            })
            .catch((error)=>{
                reject(error)
            })
    })
    
}

