<template>
    <div class="content">
        <MySiderbar :navData='leftData' :class="isFlag?'iconwidth':'navMenu'"></MySiderbar>
        <div class="mainContent" :style="{'width':contentWidth+'px'}">
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </div>  
    </div>
</template>

<script>
import MySiderbar from '../../components/common/Siderbar.vue'
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            leftData:[],
            contentWidth:0
        }
    },
    components:{
        MySiderbar
    },
    watch:{
        isFlag:function(val,oldVal){
            if(val){
                this.contentWidth = document.documentElement.clientWidth-80;
            }else{
                this.contentWidth = document.documentElement.clientWidth-200;
            }
        }
    },
    computed:{
        ...mapGetters(['isFlag'])
    },
    created(){
        
        this.leftData = [
            {
                navName:"猫眼电影",
                navIndex:"1",
                iconClass:"el-icon-menu",
                childItem:[
                    
                    {
                        navName:"热映电影",
                        navIndex:"HotMovies",
                    },
                    {
                        navName:"热门影院",
                        navIndex:"PopularCinema",
                    }
                ]
            },
            {
                navName:"酒吧",
                navIndex:"Bar",
                iconClass:"el-icon-s-help"
            },
            {
                navName:"Test",
                navIndex:"Test",
                iconClass:"el-icon-s-help"
            }
        ]
    },
    mounted(){
        this.contentWidth = document.documentElement.clientWidth-200; 
        window.onresize = function(){
            if(this.isFlag){
                this.contentWidth = document.documentElement.clientWidth-80;
            }else{
                this.contentWidth = document.documentElement.clientWidth-200;
            }
        }
    }
}
</script>



