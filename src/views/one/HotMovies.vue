<template>
    <div class="contentBox">
        <el-card shadow="always">
            <div class="main">
                <el-row class="rowsty">
                    <el-col :span="2" align="right" style="line-height:30px">类型：</el-col>
                    <el-col :span="22">
                        <ul class="types">
                            <li v-for="(item,index) in typeList" :key="index" @click="handleClick(index)" :class="flag === index?'liStyle':''">
                                {{item}}
                            </li>
                        </ul>
                    </el-col>
                </el-row>
                <el-row class="rowsty">
                    <el-col :span="2" align="right" style="line-height:30px">区域：</el-col>
                    <el-col :span="22">
                        <ul class="types">
                            <li v-for="(item,index) in areaList" :key="index" @click="handleArea(index)" :class="flagArea === index?'liStyle':''">
                                {{item}}
                            </li>
                        </ul>
                    </el-col>
                </el-row>
                <el-row class="rowsty">
                    <el-col :span="2" align="right" style="line-height:30px">年代：</el-col>
                    <el-col :span="22">
                        <ul class="types">
                            <li v-for="(item,index) in dateList" :key="index" @click="handleDate(index)" :class="flagDate === index?'liStyle':''">
                                {{item}}
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
            <div style="margin:20px 0 0 0">
                <el-radio-group v-model="radioVal" @change="handleChange">
                    <el-radio-button label="按热门排序"></el-radio-button>
                    <el-radio-button label="按时间排序"></el-radio-button>
                    <el-radio-button label="按评分排序"></el-radio-button>
                </el-radio-group>
            </div>
            <el-row style="margin:20px 0 0 0">
                <el-col>
                    <ul class="imgStyle">
                       <li v-for="(item,index) in ImgData" :key="index">
                           <a class="picStyle">
                                <img :src="item.avaImg" alt="少年的我">
                                <p>{{item.text}}</p>
                                <em>{{item.score}}</em>
                            </a>
                       </li> 
                    </ul>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            typeList:['全部','爱情','喜剧','动画','恐怖','惊悚','科幻','运动','古装','黑色电影','历史','纪录片','其他','全部','爱情','喜剧','动画',],
            areaList:['全部'],
            dateList:['全部'],
            flag:0,
            flagArea:0,
            flagDate:0,
            radioVal:'按热门排序',
            ImgData:[
                {
                    avaImg:"https://p0.meituan.net/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg@160w_220h_1e_1c",
                    text:"少年的你",
                    score:"9.7",
                    releaseTime:"2019-10-25"
                },
                {
                    text:"航海王",
                    score:"9.8",
                    releaseTime:"2019-10-08",
                    avaImg:"https://p0.meituan.net/moviemachine/ff399baffe786445b96e4e3d24fe1eeb675719.jpg@160w_220h_1e_1c"
                },
                {
                    text:"哪吒之魔童降世",
                    score:"9.9",
                    releaseTime:"2019-08-25",
                    avaImg:"https://p0.meituan.net/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg@160w_220h_1e_1c"
                },
                {
                    text:"中国机长",
                    score:"9.6",
                    releaseTime:"2019-09-20",
                    avaImg:"https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@160w_220h_1e_1c"
                },
                {
                    text:"犯罪现场",
                    score:"9.0",
                    releaseTime:"2019-09-25",
                    avaImg:"https://p0.meituan.net/movie/6392cd350d00860921042cdac7f2ed797389667.jpg@160w_220h_1e_1c"
                }
            ]
        }
    },
    mounted(){
        let that = this;
        this.$axios.get(this.$dev+"/mock/getAreaData").then(res=>{
            that.areaList = this.areaList.concat(res.data.data.map(key=>{return key.areaName}));
            that.dateList = that.dateList.concat(res.data.dateData.map(key=>{return key.date}));
        })
    },
    methods:{
        handleChange(val){
            if(val == "按评分排序"){
                this.ImgData.sort((a,b)=>{
                    return b.score - a.score
                })
            }
            if(val == "按时间排序"){
                this.ImgData.sort((a,b)=>{
                    return b.releaseTime.localeCompare(a.releaseTime)
                })
            }
        },
        handleClick(ind){
            this.flag = ind;
        },
        handleArea(ind){
            this.flagArea = ind;
        },
        handleDate(ind){
            this.flagDate = ind;
        }
    }
}
</script>

<style scoped>
.types{
    display:-webkit-flex;
    display: flex;
    flex-wrap:wrap;
}
.main{
    border: 2px solid #ccc;
    padding: 10px 0;
}
.main .rowsty {border-top: 2px dotted #ccc;padding: 6px 0;}
.main .rowsty:first-child{border-top:none;}
.types li{padding:0 8px;margin-left:15px; line-height:30px;}
.types li:hover{cursor: pointer;}
.liStyle{border-radius: 30px;background: red; color: white}

.imgStyle{
    display:-webkit-flex;
    display: flex;
    flex-wrap:wrap;
    margin-left:-20px;
}
.imgStyle li{margin-left: 20px;}
.picStyle{text-align: center;width:160px; display: inline-block;}
.picStyle img{ display: block;width:auto;height:auto;}
.picStyle p{font-size: 16px; line-height: 28px;}
.picStyle em{font-size:14px; color:rgb(151, 151, 61)}
</style>