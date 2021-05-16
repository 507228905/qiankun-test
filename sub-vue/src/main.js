import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router,{routes} from './router'
import store from './store'
import appStore from './utils/appStore'

import VueRouter from 'vue-router'


Vue.config.productionTip = false




let instance = null;
function render(props) {

    const {container,routerBase} = props;
    const router = new VueRouter({
      base:window.__POWERED_BY_QIANKUN__?routerBase:'/',
      mode: 'history',
      routes
    })
    instance = new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')

}


if (!window.__POWERED_BY_QIANKUN__){
  render({})
}
export async  function bootstrap() {
  console.log('bootstrapbootstrapbootstrapbootstrapbootstrap', '')
}

export async function mount (props) {
  console.log('mount==============='+props)
  appStore(props)
  render(props)
}

export async function unmount() {
  console.log('unmount=======')
}