import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'
import Skill from '@/views/Skill.vue'
import Service from '@/views/Service.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ],
  strict: true
})

export default router
