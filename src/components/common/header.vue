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
import BMap from 'BMap'
export default {
    data(){
        return {
            cuttentPosition:"正在定位...",
            curProvince:"",
            flag:false
        }
    },
    mounted(){
        this.getCity()
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
        getCity(){
            const geolocation = new BMap.Geolocation();
            var _this = this
            geolocation.getCurrentPosition(function getinfo(position){
                let city = position.address.city;             //获取城市信息
                let province = position.address.province;    //获取省份信息
                _this.cuttentPosition = city
                _this.curProvince = province
            }, function(e) {
                _this.cuttentPosition = "定位失败"
            }, {provider: 'baidu'});	
        }
    }
}
</script>