<template>
    <div>
        <Vheader></Vheader> 
        <div>
            <router-view :key='$route.fullPath' v-if='isRouterFlag'></router-view>
        </div>
    </div>
</template>

<script>
import Vheader from '../common/header'
export default {
    data(){
        return {
            isRouterFlag : true,
        }
    },
    components:{
        Vheader,
    },
    mounted(){
        this.isRouterFlag = false;
        this.$nextTick(function(){
            this.isRouterFlag = true
        })
    }
}
</script>

<style scoped>
    
</style>

