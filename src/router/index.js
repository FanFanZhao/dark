import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/home'
import wheel from '@/view/wheel/wheel'
import wheelDetail from '@/view/wheel/wheelDetail'
import earnings from '@/view/earnings'
import transfer from '@/view/transfer'
import walletAccount from '@/view/wallet/walletAccount'
import mine from '@/view/mine/mine'
import chargeMoney from '@/view/chargeMoney'
import help from '@/view/helps/help'
import helpDetail from '@/view/helps/helpDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'home'}
    },
    {
      path:'home',
      name:'home',
      component:home,
      children:[
        {
          path: 'wheel',
          name: 'wheel',
          component: wheel
        },
        {
          path: '/wheel/detail',
          name: 'wheelDetail',
          component: wheelDetail
        },
        {
          path: '/earnings',
          name: 'earnings',
          component: earnings
        },
        {
          path: '/transfer',
          name: 'transfer',
          component: transfer
        },
        {
          path: '/walletAccount',
          name: 'walletAccount',
          component: walletAccount
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine
        },
        {
          path: '/chargeMoney',
          name: 'chargeMoney',
          component: chargeMoney
        },
        {
          path: '/help',
          name: 'help',
          component: help
        },
        {
          path: '/helpDetail',
          name: 'helpDetail',
          component: helpDetail
        }
      ]
    },
    
  ]
})
