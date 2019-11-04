import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//要设置的全局访问的state对象
const state = {
    userData:{},
    showFlag:false,
    count:0,
    permission:false,
    maxHeight:500,
    isCollapse:false
};

//实时监听state值的变化
const getters = {
    isShow(state){
        return state.showFlag
    },
    isFlag(state){
        return state.isCollapse
    }
};

//改变state初始值的方法，
const mutations = {
    changeValue(state){
        state.showFlag = true;
    },
    addValue(state,sum){
        state.count+=sum
    },
    getPermisson(state,val){
        state.permission = val
    },
    setMaxHeight(state,data){
        state.maxHeight = data
    },
    setIsCollapse(state,data){
        state.isCollapse = data
    }
}

//触发mutations里函数的方法，
const actions = {
    changeShow(context){
        context.commit('changeValue');
    },
    changeAddValue(context,num){
        context.commit('addValue',num);
    },
    changePermission(context,boolean){
        context.commit('getPermisson',boolean)
    }
}

//实例化store
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});


export default store;