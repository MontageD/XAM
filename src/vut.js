import Vue from 'vue'
import './common/base.scss'
import {
  Button
} from './components/button'

const install = function (Vue) {
  Vue.component(Button.name, Button);
  // Vue.component(ButtonGroup.name, ButtonGroup)

  Vue.prototype.$dialog = {
    Button: Button
  };
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};