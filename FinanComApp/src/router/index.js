import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index";
import ReturnBoard from "../components/ReturnBoard";
import InfoList from "../components/InfoList";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/InfoList',
      component: InfoList,
    },
    {
      path: '/ReturnBoard',
      name: 'ReturnBoard',
      component: ReturnBoard,
    },
    {
      path: '/InfoList',
      name: 'InfoList',
      component: InfoList,
    },

  ]
})
