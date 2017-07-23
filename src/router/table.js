import Layout from '@/layout'
import Table from '@/components/table/table'
/*
 **  leaf， 为 `true`,标识此导航栏只有一个节点，
 */
export default [{
  path: '/',
  leaf: true,
  component: Layout,
  children: [{
    icon: 'ios-paper',
    path: '/table',
    name: '导航一',
    component: Table
  }]
}]
