import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AccommodationView from '../views/AccommodationView.vue'
import PhotoGalleryView from '../views/PhotoGalleryView.vue'

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
      path: '/gallerie-photo/:id',
      name: 'photo_gallery',
      component: PhotoGalleryView
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

export default router
