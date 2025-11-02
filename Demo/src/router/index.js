import { createRouter, createWebHistory } from 'vue-router'

import Reactives from '../components/Reactives.vue'
import Props from '../components/Props.vue'
import Emit from '../components/Emit.vue'
import VirtualDOM from '../components/Virtual-DOM.vue'
import Watchers from '../components/Watchers.vue'
import ComputedProperties from '../components/Computed-Properties.vue'
import LifecycleHook from '../components/Lifecycle-Hook.vue'
import GlobalStore from '../components/Global-Store.vue'
import APIIntegration from '../components/API-Integration.vue'
import TestDemo from '../components/Test-Demo.vue'

const routes = [
  { path: '/', redirect: '/reactives' },
  { path: '/reactives', component: Reactives },
  { path: '/props', component: Props },
  { path: '/emit', component: Emit },
  { path: '/virtual-dom', component: VirtualDOM },
  { path: '/watchers', component: Watchers },
  { path: '/computed-properties', component: ComputedProperties },
  { path: '/lifecycle-hook', component: LifecycleHook },
  { path: '/global-store', component: GlobalStore },
  { path: '/api-integration', component: APIIntegration },
  { path: '/Test-Demo' , component: TestDemo }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
