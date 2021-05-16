import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  runAfterFirstMounted,
  initGlobalState,
} from 'qiankun'
import appStore from './../utils/appStore'
const qiankunStart = (list) => {
  // alert(1)
  console.log(list)
  registerMicroApps(list, {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
      },
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      },
    ],
  })

  setDefaultMountApp('/')

  appStore(initGlobalState)
  /**
   * @name 启动微前端
   */
  start()
  /**
   * @name 微前端启动进入第一个子应用后回调函数
   */
  runAfterFirstMounted(() => {})
  //启动qiankun应用间通信机制
}
export default qiankunStart
