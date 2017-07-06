import Layout from '@/layout'
import Table from '@/components/table/table'

export default [{
  path: '/',
  name: '导航一',
  component: Layout,
  children: [{
    path: '/table',
    name: '表格',
    component: Table
  }]
}]
