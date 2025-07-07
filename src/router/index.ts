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
      component: () => import('../views/main/LandingPage.vue')
    },
    {
      path: '/main/:id',
      name: 'main',
      // component: () => import('../views/main/TemporaryPage.vue')
      component: () => import('../views/MainDashboard.vue')
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
    // {
    //   path: '/newsfeed',
    //   name: 'newsfeed',
    //   component: () => import('../views/newsfeed/NewsFeedDashboard.vue')
    // },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/members/MembersDashboard.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings/SettingsDashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/ProfileDashboard.vue')
    },
    {
      path: '/groups',
      name: 'groups',
      component: () => import('../views/groups/GroupsDashboard.vue')
    },
    {
      path: '/collections',
      name: 'collections',
      component: () => import('../views/collections/CollectionsDashboard.vue')
    },
    {
      path: '/loans',
      name: 'loans',
      component: () => import('../views/loans/LoansDashboard.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/reports/ReportsDashboard.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/wallet/WalletDashboard.vue')
    },
    {
      path: '/developer',
      name: 'developer',
      component: () => import('../views/developer/DeveloperDashboard.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/notifications/NotificationsDashboard.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/education/EducationDashboard.vue')
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('../views/chatroom/ChatRoomDashboard.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/support/SupportDashboard.vue')
    },
    // will match everything and put it under `route.params.pathMatch`
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/errors/404-NotFound.vue')
    },
  ]
});

const routesNotToBeAuthenticated: RouteRecordName[] | null = ['register', 'login', 'reset-password'];

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
