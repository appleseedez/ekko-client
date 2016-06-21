import  path from 'path'
import _ from 'lodash'
const rootPath = path.resolve(__dirname,'..','public') // give me the page path

/* Here is your config */
const cfg = {
  'login':{
    width:500,
    height:260,
    frame:false
  },
  'main':{
    width:0,
    height:0
  }
}





// don't touch.
// magic!
const WindowConfig = _.mapValues(cfg,(v,k)=>{
  return {
    path:path.resolve(rootPath,k+'.html'),
    opt:v
  }
})
export { WindowConfig }
