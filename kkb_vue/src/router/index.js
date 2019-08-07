import Vue from 'vue'
import Router from 'vue-router'
import SlotLearn from '@/components/SlotLearn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SlotLearn',
      component: SlotLearn
    }
  ]
})
