import Layout from '@/layout'
import form from '@/components/form/form'
/*
* hidden,为 `true`,表示不在右侧导航出现
*/
export default [{
    path: '/',
    name: '导航二',
    component: Layout,
    icon: 'android-options',
    children: [{
      path: '/form',
      name: '表单1',
      hidden: true,
      component: form
    }, {
      path: '/form2',
      name: '表单2',
      component: form
    }, {
      path: '/form3',
      name: '表单3',
      component: form
    }, {
      path: '/form4',
      name: '表单4',
      component: form
    }]
  }]
