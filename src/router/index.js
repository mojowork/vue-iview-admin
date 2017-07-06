import Vue from 'vue'
import Router from 'vue-router'
import Table from './table.js'
import Form from './form.js'

Vue.use(Router)

export default new Router({
  routes: [].concat(Table, Form) // 组件位置决定着右侧导航的上下位置
})
