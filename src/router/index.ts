import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '../views/TabsPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegPage from '../views/RegPage.vue'
import HomePage from '../views/HomePage.vue'
import Tab2Page from '../views/Tab2Page.vue'
import Tab3Page from '../views/Tab3Page.vue'
import JournalPage from '../views/JournalPage.vue'
import NewsPage from '../views/NewsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'login',
        component: () => import ('@/views/LoginPage.vue')
      }
  ]
  
  },
  
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/reg',
    component: RegPage
  },
  {
    path: '/tabs/home',
    component: HomePage
  },
  {
    path: '/tabs/tab2',
    component: Tab2Page
  },
  {
    path: '/tabs/tab3',
    component: Tab3Page
  },
  {
    path: '/tabs/journal',
    component: JournalPage
  },
  {
    path: '/tabs/news',
    component: NewsPage
  }
]
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

export default router;
