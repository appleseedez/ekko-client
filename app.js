import { app,screen,ipcMain} from 'electron'
import window from 'electron-window'
import { WindowConfig } from './config/window-config'
import _ from 'lodash'
app.on('ready',()=>{
  // see if localstorage has the token
  // if has just do login but dont show login window
  // else show the login window

  // 1. login window
  // 2. device window
  // 3. main window
  // 4. misc setting window


  const size = screen.getPrimaryDisplay().workAreaSize // screen object can only access in app.on ready
  const mainCfg = _.assign(WindowConfig['main'].opt,{width:size.width,height:size.height})
  const MainWindow = window.createWindow(mainCfg)

  const loginCfg = _.assign(WindowConfig['login'].opt,{parent:MainWindow,modal:true})
  const LoginWindow = window.createWindow(loginCfg)

  let someArgs = { data: 'this data can be seen in the opening window' }
  ipcMain.on("LoginSuccess",(evt,arg)=>{
    LoginWindow.hide()
    MainWindow.show()
    MainWindow.webContents.openDevTools()
  })
  MainWindow.showUrl(WindowConfig['main'].path,{},()=>{
    MainWindow.hide()

    LoginWindow.showUrl(WindowConfig['login'].path, someArgs, () => {
      LoginWindow.center()
    })
  })
  // MainWindow.webContents.openDevTools()

})
