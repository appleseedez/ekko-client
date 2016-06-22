import fetch from 'node-fetch'
import _ from 'lodash'
const Config = {
  scheme:'http://',
  host:'120.25.96.54',
  port:3000,
  userAgent:"Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10"
}

const API = {
baseUrl:function(){
  return Config.scheme+Config.host+':'+Config.port
},
params:function(obj){
  if (!obj || _.size(obj) === 0) {
    return ''
  }
  return _.map(obj,(v,k)=>{
    return k+'='+encodeURIComponent(v)
  }).join('&')
},
doPost:function(url,payload){
  console.log(url);
  let cfg = {
    method:'post',
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8", "User-Agent":Config.userAgent},
    credentials:'same-origin', //保证cookie的发送
    body:API.params(payload)
  }
  return fetch( API.baseUrl()+url, cfg )
},
}


export { API }
