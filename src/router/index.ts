import { createRouter, createWebHistory } from 'vue-router'
import useAuthentication from '@/composables/auth';

const { isAuthenticated } = useAuthentication();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login.vue'),
    },
    {
      path: '/2fa-verification',
      name: '2fa-verification',
      component: () => import('../views/auth/2fa.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/register.vue')
    },
  ]
});

const routesNotToBeAuthenticated = ['register', 'login', 'reset-password'];

router.beforeEach(async (to, from, next) => {
  const user = sessionStorage.getItem('user')
  const token = sessionStorage.getItem('token')
  const nextPath = to.path;
  const authenticated = (user ?? null) && (token ?? null);
  // console.log(authenticated, '<=== authenticated', isAuthenticated.value, authenticated, to, from, routesNotToBeAuthenticated.includes(to.name));

  if (nextPath === '/login') next();

  else if (routesNotToBeAuthenticated.includes(to.name)) next();

  else if (authenticated === false || authenticated === null) next('/login');

  else if (authenticated === false || authenticated === null) next('/login');

  else next()
})

export default router
