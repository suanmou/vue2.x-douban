import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
import AudioBook from '@/pages/AudioBook/AudioBook'
import Broadcast from '@/pages/Broadcast/Broadcast'
import Group from '@/pages/Group/Group'
import Mine from '@/pages/Mine/Mine'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
