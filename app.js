import { app,screen } from 'electron'
import window from 'electron-window'
import { WindowConfig } from './config/window-config'
import _ from 'lodash'
app.on('ready',()=>{
  // see if localstorage has the token
  // if has just do login but dont show login window
  // else show the login window

  const LoginWindow = window.createWindow(WindowConfig['login'].opt)
  const size = screen.getPrimaryDisplay().workAreaSize
  const MainWindow = window.createWindow(_.assign(WindowConfig['main'].opt,{parent:LoginWindow,modal:true,type:'textured',width:size.width,height:size.height}))
  let someArgs = { data: 'this data can be seen in the opening window' }
  // MainWindow.webContents.openDevTools()
  LoginWindow.showUrl(WindowConfig['login'].path, someArgs, () => {
    LoginWindow.center()
    MainWindow.showUrl(WindowConfig['main'].path)
  })
})
