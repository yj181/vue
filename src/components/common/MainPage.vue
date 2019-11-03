<template>
    <div class="BoxContent" style="padding:20px 0 0 0;">
        <el-row>
            <el-col :span='6' :offset='1'>
                <router-link to='/oneHome'>
                    <el-card class="elCard">
                    <img src="../../../static/images/movies/timg.jpg" class="image">
                    <div style="padding: 2%; ">
                        <span>猫眼电影</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </router-link>
            </el-col>
            <el-col :span='6' :offset='2'>
                <router-link to='/TwoPage'>
                    <el-card class="elCard">
                    <img src="../../../static/images/movies/food.png" class="image">
                    <div style="padding: 2%;">
                        <span>美食的诱惑</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </router-link>
            </el-col>
            <el-col :span='6' :offset='2'>
                <router-link to='../../Views/Three'>
                    <el-card class="elCard">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 2%;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isRouterFlag : true,
            currentDate : new Date().getFullYear() + "-" +`${(new Date().getMonth())+1}` + "-"+new Date().getDate()
        }
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
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 96%;
    height:230px;
    display: inline-block;
    margin: 0 auto;
    padding:0 2%;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

