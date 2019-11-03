<template>
    <div class="contentBox">
         <el-card shadow="always">
             <el-row>
                 <el-col :span="24"><h3>热门影院</h3></el-col>
             </el-row>
             <el-carousel :interval="2500" height="500px" style="margin:20px 0 0 0;">
                <el-carousel-item v-for="(item,index) in urls" :key="index">
                    <img :src="item.url" alt="" style="width:100%;height:100%">
                </el-carousel-item>
            </el-carousel>
         </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            urls:[]
        }
    },
    computed:{

    },
    mounted(){

    },
    created(){
        this.urls = [
                {
                    url:require('../../../static/images/movies/1.jpg'),
                },
                {
                    url:require('../../../static/images/movies/2.jpg')
                },
                {
                    url:require('../../../static/images/movies/2.jpg')
                },
                {
                    url:require('../../../static/images/movies/3.jpg')
                },
                {
                    url:require('../../../static/images/movies/4.jpg')
                },
                {
                    url:require('../../../static/images/movies/5.jpg')
                },
                {
                    url:require('../../../static/images/movies/8.jpg')
                }
        ]
    },
    methods:{

    }
}
</script>

<style scoped>
.demo-image__lazy{
    height: 500px;
    overflow: auto;
    margin:20px 0 0 0;
}
.demo-image__lazy .el-image{
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}
</style>