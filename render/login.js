import React from 'react';
import ReactDOM from 'react-dom';
import LoginView from '../components/login.jsx'
import { API } from '../api'
import md5 from 'md5'
const { ipcRenderer } = require('electron')

ReactDOM.render(<LoginView />, document.getElementById('root'));


API.doPost('/api/Users/login',{
  email:'appleseedez@163.com',
  password:'hello1234'
})
.then(res=>{
  return res.json()
})
.then(res=>{
  console.log(res);
  if (res.id) {
    ipcRenderer.send('LoginSuccess')
  }
})
