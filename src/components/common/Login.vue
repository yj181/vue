<template>
    <div>
        <el-row class="loginStyle">
            <el-col :span='6'>
                <el-card shadow='hover' :body-style="{ padding: '20px' }">
                    <div slot='header' class='clearfix'>
                        <span>{{title}}</span>
                    </div>
                    <el-form ref='formData' :rules="rules" :model="temp" label-width="52px" label-position='right'>
                        <el-form-item label='账户' prop='userName'>
                            <el-input v-model="temp.userName" placeholder='请输入账户昵称...'></el-input>
                        </el-form-item>
                        <el-form-item label='密码' prop='passWord'>
                            <el-input v-model="temp.passWord" show-password placeholder='请输入账户密码...'></el-input>
                        </el-form-item>
                    </el-form>
                    <el-row>
                        <el-col :span='4' align='right'>
                            <el-button type='primary' size='small' round @click="handleRegiste">注册</el-button>
                        </el-col>
                        <el-col :span='20' align='right'>
                            <el-button type='primary' size='small' round @click="handleLoginIn(temp)">登录</el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog title="注册信息" :visible.sync="dialogVisible" :before-close="handleClose" width='40%'>
            <el-form :model='registerData' ref='form' :rules="rulesData" :inline="true" label-width="65px" label-position='right' style='width:100%'>
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="registerData.userName"></el-input>
                </el-form-item>
                <el-form-item label='密码' prop='passWord'>
                     <el-input v-model="registerData.passWord"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="registerData.email"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="roles">
                    <el-select v-model="registerData.roles" multiple placeholder="请选择角色" clearable>
                        <el-option
                        v-for="(item,index) in rolesData"
                        :key="index"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot='footer' class='dialog-footer'>
                <el-button size='small' @click="handleClose">取消</el-button>
                <el-button size='small' type='primary' @click="handleConfirm">确认</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false,
            temp:{},
            title:"用户登录",
            registerData:{},
            storage:{
                uuid:"Login",
                userName:"",
                passWord:""
            },
            rules:{
                userName:[
                    {required:true,message:'必填项,Can not be empty here!',trigger:'blur'}
                ],
                passWord:[
                    {required:true,message:'必填项,Can not be empty here!',trigger:'blur'}
                ]
            },
            rulesData:{
                userName:[
                    {required:true,message:'*必填',trigger:'blur'}
                ],
                passWord:[
                    {required:true,message:'*必填',trigger:'blur'}
                ],
                email:[
                     {required:true,message:'请输入正确邮箱',trigger:['blur','change']}
                ]
            },
            rolesData:[
                {
                    label:"PM",
                    value:"PM"
                },
                {
                    label:"PO",
                    value:"PO"
                },
                {
                    label:"SE",
                    value:"SE"
                },
                {
                    label:"Admin",
                    value:"Admin",
                },
                {
                    label:"User",
                    value:"User"
                },
                {
                    label:"游客",
                    value:"游客"
                }
            ]
        }
    },
    methods:{
        handleConfirm(){
            this.$refs['form'].validate((valid)=>{
                if(valid){
                    this.dialogVisible = false;
                }else{
                    return false
                }
            })
        },
        resetData(){
            this.registerData = {
                userName:"",
                passWord:"",
                email:"",
                roles:[]
            }
        },
        handleClose(){
            this.resetData();
            this.dialogVisible = false;
            this.$message({
                type:"info",
                message:"已关闭弹框"
            })
        },
        handleLoginIn(temp){
            this.$refs['formData'].validate((valid)=>{
                if(valid){
                   this.$store.dispatch('changePermission',true)
                   this.storage.passWord = temp.passWord;
                   this.storage.userName = temp.userName;
                   this.setLocalStorage(this.storage);
                   this.$router.push({
                       path:"/"
                   })
                }else{
                    this.$message.error('获取用户信息失败，登录错误')
                    return false;
                }
            })
        },
        handleRegiste(){
            this.dialogVisible = true;
            this.resetData();
        },
    },
    created(){
        this.storage = this.getLocalStorage(this.storage);
    },
    mounted(){
       
    },
    beforeDestroy(){
       this.setLocalStorage(this.storage);
    }
}
</script>

<style scoped>
.loginStyle{
    display: flex;
    height: 400px;
    justify-content: center;
    align-items: center;
}
</style>

