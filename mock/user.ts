import Mock from 'mockjs'

Mock.setup({
  timeout: 1500
})
// 使用mockjs模拟数据
Mock.mock('/api/gw/v2/login/account', {
  resultData: {
    id: 16,
    token: 'token123',
    userCode: 'huatong',
    userName: 'admin',
    userRole: 'TENANT_READONLY_ADMIN'
  },
  success: true,
  errorMsg: '登录失败'
})

Mock.mock('/api/gw/v2/TenantAdminFacade/queryCurLoginUser', {
  resultData: {
    headPortrait: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
    id: 16,
    token: 'token234',
    userCode: 'huatong',
    userName: 'admin',
    userRole: 'TENANT_SUPER_ADMIN',
    success: true
  },
  success: true
})
