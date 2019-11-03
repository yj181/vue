<template>
    <div class="sidebar" >
        <el-menu class="el-menu-vertical-demo" :default-active="indexItem"
            text-color="white" unique-opened :collapse="isFlag" active-text-color="#ffd04b" router background-color="#545c64">
            <template v-for="item in navData" >
                <template v-if="item.childItem" >
                    <el-submenu :index="item.navIndex" :key="item.navIndex" >
                        <template slot="title">
                            <i :class="item.iconClass"></i>
                            <span slot="title">{{ item.navName }}</span>
                        </template>
                            <template v-for="subItem in item.childItem">
                                <template v-if="subItem.childItem">
                                    <el-submenu :index="subItem.navIndex" :key="subItem.navIndex">
                                       <template slot="title">
                                            <i :class="subItem.iconClass"></i>
                                            <span slot="title">{{ subItem.navName }}</span>
                                       </template>
                                       <el-menu-item-group>
                                           <el-menu-item :index="subItem.navIndex" :key="subItem.navIndex">
                                               {{subItem.navName}}
                                            </el-menu-item>
                                       </el-menu-item-group>
                                    </el-submenu>
                                </template>
                                <template v-else>
                                    <el-menu-item :index="subItem.navIndex" :key="subItem.navIndex">
                                        <span slot="title">{{subItem.navName}}</span>
                                    </el-menu-item>
                                </template>
                             </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.navIndex" :key="item.navIndex">
                        <i :class="item.iconClass"></i>
                        <span slot="title">{{ item.navName }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            indexItem:this.navData[0].navIndex,
            
        }
    },
    props:{
        navData:{
            type:Array,
            default:[]
        },
        
    },
    computed:{
        ...mapGetters(['isFlag'])
    },
    created(){

    },
    mounted(){
        let ind = this.$route.path.lastIndexOf("/") 
        this.indexItem = this.$route.path.slice(ind+1);
        this.isCollapse = this.$store.state.isCollapse;
    },
    methods:{
       
    }
}
</script>

<style scoped>


</style>
