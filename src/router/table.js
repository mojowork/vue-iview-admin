import Layout from '@/layout'
import Table from '@/components/table/table'

export default [{
    path: '/',
    name: '导航一',
    leaf: true,
    component: Layout,
    icon: 'ios-paper',
    children: [{
      path: '/table',
      name: '表格',
      component: Table
    }, {
      path: '/table2',
      name: '表格2',
      component: Table
    }, {
      path: '/table3',
      name: '表格3',
      component: Table
    }, {
      path: '/table4',
      name: '表格4',
      component: Table
    }]
  }]
