import Vue from 'vue'
import Router from 'vue-router'
import BoxContent from '../components/common/BoxContent'
import MainPage from '../components/common/MainPage'
import Login from '../components/common/Login'

Vue.use(Router);

//官方vue-router3.x新版本路由默认回调返回的都是promise，原先旧版本的路由回调将废弃
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};


const routes = [
    {
      path: '/',
      component: BoxContent,
      children:[
          {
            path:"/",
            name:"MainPage",
            component: MainPage,
          },
          {
            path:"/oneHome",
            component: resolve=>(require(["@/views/one/oneHome"],resolve)),
            redirect:"/oneHome/HotMovies",
            children:[
              {
                path:"HotMovies",
                component:resolve=>(require(["@/views/one/HotMovies"],resolve)),
                meta:{
                  title:"热映电影"
                }
              },
              {
                path:"PopularCinema",
                component:resolve=>(require(["@/views/one/PopularCinema"],resolve)),
                meta:{
                  title:"热门影院"
                }
              },
              {
                path:"Test",
                component:resolve=>(require(["@/views/one/Test"],resolve)),
                meta:{
                  title:"Test"
                }
              },
              {
                path:"Bar",
                component:resolve=>(require(["@/views/one/Bar"],resolve)),
                meta:{
                  title:"酒吧"
                }
              }
            ]
          }
      ]
    },
    {
      path:"/Login",
      name:"Login",
      component: Login,
      meta:{
        title:"登录界面"
      }
    }
    
  ]
  
const router = new Router({
  mode:'hash',
  routes:routes
})


export default router
