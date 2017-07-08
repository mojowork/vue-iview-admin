import Layout from '@/layout'
import form from '@/components/form/form'
/*
* hidden,为 `true`,表示不在右侧导航出现
* leaf， 为 `true`,标识此导航栏有子节点，
*/
export default [{
    path: '/',
    name: '导航二',
    leaf: true,
    component: Layout,
    icon: 'android-options',
    children: [{
      path: '/form',
      name: '表格',
      hidden: true,
      component: form
    }, {
      path: '/form2',
      name: '表格2',
      component: form
    }, {
      path: '/form3',
      name: '表格3',
      component: form
    }, {
      path: '/form4',
      name: '表格4',
      component: form
    }]
  }]
