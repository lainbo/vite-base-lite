import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach(to => {
  // 验证权限之类的
  if (to.path === '/home/h1') {
    router.push('/')
  }
})
