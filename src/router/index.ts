import type { RouteRecordName } from 'vue-router';
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
    {
      path: '/newsfeed',
      name: 'newsfeed',
      component: () => import('../views/newsfeed/index.vue')
  },
  {
      path: '/members',
      name: 'members',
      component: () => import('../views/members/index.vue')
  },
  {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings/index.vue')
  },
  {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/index.vue')
  },
  {
      path: '/groups',
      name: 'groups',
      component: () => import('../views/groups/index.vue')
  },
  {
      path: '/collections',
      name: 'collections',
      component: () => import('../views/collections/index.vue')
  },
  {
      path: '/loans',
      name: 'loans',
      component: () => import('../views/loans/index.vue')
  },
  {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/reports/index.vue')
  },
  {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/wallet/index.vue')
  },
  {
      path: '/developer',
      name: 'developer',
      component: () => import('../views/wallet/index.vue')
  },
  {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/notifications/index.vue')
  },
  {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('../views/chatroom/index.vue')
  },
  {
      path: '/support',
      name: 'support',
      component: () => import('../views/support/index.vue')
  },
  ]
});

const routesNotToBeAuthenticated : RouteRecordName[] | null = ['register', 'login', 'reset-password'];

router.beforeEach(async (to, from, next) => {
  
  const user = sessionStorage.getItem('user')
  const token = sessionStorage.getItem('token')
  const nextPath = to.path;
  const authenticated: string | null = (user ?? null) && (token ?? null);
  // console.log(authenticated, '<=== authenticated', isAuthenticated.value, authenticated, to, from, routesNotToBeAuthenticated.includes(to.name));

  if (nextPath === '/login') next();

  // else if (routesNotToBeAuthenticated.includes(to.name)) next();

  else if (authenticated === null) next('/login');

  else next()
})

export default router
