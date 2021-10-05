import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue';
import DataBindingInputText from '../views/DataBindingInputText';
import DataBindingInputNumber from '../views/DataBindingInputNumber';
import DataBindingTextarea from '../views/DataBindingTextarea.vue';
import DataBindingSelect from '../views/DataBindingSelect.vue';
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue';
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue';
import DataBindingRadio from '../views/DataBindingRadio.vue';
import DataBindingAttribue from '../views/DataBindingAttribue.vue';
import DataBindingButton from '../views/DataBindingButton.vue';
import DataBindingClass from '../views/DataBindingClass.vue';
import DataBindingClass2 from '../views/DataBindingClass2.vue';
import DataBindingList from '../views/DataBindingList.vue';
import DataBindingVIf from '../views/DataBindingVIf.vue';
import EventClick from '../views/EventClick.vue';
import EventChange from '../views/EventChange.vue';
import Computed from '../views/Computed.vue';
import Watch from '../views/Watch.vue';
import Watch2 from '../views/Watch2.vue';
import DataBindingList2 from '../views/DataBindingList2.vue';
import NestedComponent from '../views/NestedComponent.vue';
import ParentComponent from '../views/ParentComponent.vue';
import ParentComponent2 from '../views/ParentComponent2.vue';
import ParentComponent3 from '../views/ParentComponent3.vue';
import ParentComponent4 from '../views/ParentComponent4.vue';
import ParentComponent5 from '../views/ParentComponent5.vue';
import SlotUseModalLayout from '../views/SlotUseModalLayout.vue';
import ProvideInject from '../views/ProvideInject.vue';
import CompositionAPI from '../views/CompositionAPI.vue';
import CompositionAPI2 from '../views/CompositionAPI2.vue';
import CompositionAPI3 from '../views/CompositionAPI3.vue';
import CompositionAPI4 from '../views/CompositionAPI4.vue';

const routes = [
  {
    path: '/CompositionAPI4',
    name: 'CompositionAPI4',
    component: CompositionAPI4
  },
  {
    path: '/CompositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/CompositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/CompositionAPI',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/SlotUseModalLayout',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  },
  {
    path: '/ParentComponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/ParentComponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path: '/ParentComponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/ParentComponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/NestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/DataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/Watch2',
    name: 'Watch2',
    component: Watch2
  },
  {
    path: '/Watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick
  },
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
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/DataBindingAttribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/DataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/DataBindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/DataBindingClass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/DataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/DataBindingVIf',
    name: 'DataBindingVIf',
    component: DataBindingVIf
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
