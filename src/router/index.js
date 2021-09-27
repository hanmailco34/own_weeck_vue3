import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue';
import DataBindingInputText from '../views/DataBindingInputText';
import DataBindingInputNumber from '../views/DataBindingInputNumber';
import DataBindingTextarea from '../views/DataBindingTextarea.vue';
import DataBindingSelect from '../views/DataBindingSelect.vue';
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue';
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // vue.config.js에서 prefetch를 delete시켜도 webpackPrefetch를 true로 하면 prefetch 기능 on
    component: () => import(/* webpackChunkName: "about",webpackPrefetch: true */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
