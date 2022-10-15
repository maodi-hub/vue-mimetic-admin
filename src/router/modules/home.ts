export default [
  {
    path: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('@views/Home/index.vue'),
        children: [
          {
            path: 'charts',
            name: 'charts',
            component: () => import('@views/Charts/index.vue')
          }
        ]
      }
    ]
  }
]