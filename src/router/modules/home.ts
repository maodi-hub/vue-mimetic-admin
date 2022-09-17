export default [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@views/Home/index.vue')
      }
    ]
  }
]