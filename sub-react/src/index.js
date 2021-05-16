import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appStore from './utils/appstore'




function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

if(!window.__POWERED_BY_QIANKUN__){
  render({})
}
export async function bootstrap() {
  console.log('bootstrap========', '')

}
export async function mount(data) {

  appStore(data)
  render(data)
  console.log(data)
  console.log('mount sub-react ========', data)
}
export async function unmount(data) {
  console.log('unmount========', data)
  ReactDOM.unmountComponentAtNode(data.container.querySelector('#root'))
}
