import Vue from 'vue';
import store from '../store'
import router from '../router/index'
import Cookies from 'js-cookie'

function getCookie(){
    return Cookies
}

let Storage = window.localStorage;

router.beforeEach((to,from,next) => {
    
    if(to.path == "/Login"){
       next()
    }else{
        if(JSON.parse(Storage.getItem('Login'))){
            next()
        }else{
            next({
                path:"/Login"
            })
        }
    }
    
})

