import { createRouter, createWebHistory } from 'vue-router'
import { useDataStore } from '@/stores/data'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AccommodationView from '../views/AccommodationView.vue'
import PhotoGalleryView from '../views/PhotoGalleryView.vue'
import PictureView from '../views/PictureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
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
  if (to.name === 'login' && dataStore.connectionStatus.value === true) {
    next({ name: 'home' })
  }
  else {
    next()
  }
})

export default router
