import { createRouter, createWebHistory } from 'vue-router'
import { useDataStore } from '@/stores/data'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AccommodationView from '../views/AccommodationView.vue'
import PhotoGalleryView from '../views/PhotoGalleryView.vue'
import PictureView from '../views/PictureView.vue'
import AccountView from '../views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Accueil
      path: '/',
      name: 'home',
      component: HomeView
    },

    // Accommodation
    {
      path: '/logement/:id',
      name: 'accommodation',
      component: AccommodationView
    },
    {
      path: '/galerie-photo',
      name: 'photo_gallery',
      component: PhotoGalleryView
    },
    {
      path: '/photo/:id',
      name: 'picture',
      component: PictureView
    },

    // Account
    {
      path: '/mon-compte',
      name: 'account',
      component: AccountView
    },

    // Connection
    {
      path: '/connexion',
      name: 'login',
      component: LoginView
    },
    {
      path: '/inscription',
      name: 'register',
      component: RegisterView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const dataStore = useDataStore()
  dataStore.getConnectionStatus()
  const isConnected = dataStore.connectionStatus.value

  const allPagesAvailable = [
    'home',
    'accommodation',
    'photo_gallery',
    'picture',
    'account',
    'login',
    'register',
  ]
  const publicPagesAvailable = [
    'home',
    'accommodation',
    'photo_gallery',
    'picture',
    'login',
    'register',
  ]

  if (!allPagesAvailable.includes(to.name)) {
    next({ name: 'home' })
  }
  else if (!publicPagesAvailable.includes(to.name) && !isConnected) {
    next({ name: 'home' })
  }
  else if (to.name === 'login' && isConnected) {
    next({ name: 'home' })
  }
  else {
    next()
  }
})

export default router
