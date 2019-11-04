<template>
    <div style="width:100%;height:46px;line-height:46px;background:#EEE5DE">
        <el-row>
            <el-col :span="8">
                <div style="display:flex">
                <span style="margin:0 20px">
                    {{"我所在城市："+curProvince+" "+cuttentPosition}}
                </span>
                <i :class="flag?'el-icon-s-fold redicon':'el-icon-s-unfold'" style="font-size:30px;margin-top:8px;cursor:pointer" @click="handleFlag"></i>
                </div>
            </el-col>
            <el-col :span="16" align="right">
                <el-button type="text" style="margin:0 20px 0 0" @click="handleIndex">返回首页</el-button>
            </el-col>
        </el-row>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            cuttentPosition:"正在定位...",
            curProvince:"",
            flag:false
        }
    },
    mounted(){

    },
    methods:{
        handleFlag(){
            if(this.$route.path == "/"){
                return false
            }else{
                this.flag = !this.flag;
                this.$store.commit("setIsCollapse",this.flag)
            }
        },
        handleIndex(){
            this.$router.push({path:"/"})
        },
        
    }
}
</script>