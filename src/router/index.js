import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wheel from '@/view/wheel'
import wheelDetail from '@/view/wheelDetail'
import earnings from '@/view/earnings'
import transfer from '@/view/transfer'
import walletAccount from '@/view/walletAccount'
import mine from '@/view/mine'
import chargeMoney from '@/view/chargeMoney'
import help from '@/view/help'
import helpDetail from '@/view/helpDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wheel',
      component: wheel
    },
    {
      path: '/wheelDetail',
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
})
