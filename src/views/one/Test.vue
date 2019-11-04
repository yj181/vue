<template>
    <div class="contentBox">
        <el-card>
            <el-row>
                <el-col :span="24" align="right">
                    <el-input placeholder="请输入内容..." v-model="inputValue" class="input-with-select" clearable @keyup.enter.native="handleFilter">
                        <el-select style="width:100px" v-model.trim="selectItem" slot="prepend" placeholder="请选择">
                            <el-option label="姓名" value="userName"></el-option>
                            <el-option label="日期" value="date"></el-option>
                            <el-option label="地址" value="address"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search" @click="handleFilter"></el-button>
                    </el-input>
                </el-col>
            </el-row>
            <el-table :data="tableData | pagination(currentPageNo,currentPageSize)" border style='width:100%;margin:20px 0 0 0' stripe header-cell-class-name="headerCSS" :max-height="maxHeight-160">
                <el-table-column type="index" width="40" align="center"></el-table-column>
                <el-table-column prop="date" label="日期" width="120" align='center' sortable></el-table-column>
                <el-table-column prop="userName" label="姓名" width="120" align='center' sortable></el-table-column>
                <el-table-column prop="age" label="年龄" width="120" align='center' sortable></el-table-column>
                <el-table-column prop="bloodType" align="center" label="血型" width="100" sortable></el-table-column>
                <el-table-column prop="address" label="地址" show-overflow-tooltip sortable></el-table-column>
                <el-table-column label='操作' width='150' align='center'>
                    <template v-slot='scope'>
                        <el-button type='primary' circle @click='handleUpdate(scope.row,scope.column)'>修改</el-button>
                        <el-button type='danger' circle @click='handleDelete(scope.row,scope.$index)'>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPageNo"
                :page-sizes="[20, 50, 100, 200]"
                :page-size="currentPageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length"
                style="margin:20px 0 0 0">
            </el-pagination>
        </el-card>
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible" :before-close='handleClose' width="38%">
            <el-form :model="temp" :inline="true" label-position="right" style="width:100%;" label-width="80px" class="demo-form-inline">
                <el-form-item label="日期">
                    <el-input v-model="temp.date" placeholder="填写日期"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="temp.userName" placeholder="填写姓名"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="temp.address" placeholder="填写地址"></el-input>
                </el-form-item>
                <div>
                    <el-button type="primary" @click="handleConfirm(temp)">确认</el-button>
                    <el-button @click="handleClose">取消</el-button>
                </div>
            </el-form>
        </el-dialog>
    </div>    
</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            temp:{},
            selectItem:"userName",
            inputValue:"",
            dialogTableVisible:false,
            originData:[],
            tableData:[],
            currentPageNo:1,
            currentPageSize:20
        }
    },
    computed:{
        ...mapState(['maxHeight']),
    },
    beforeRouteEnter(to,from,next){
        next()
    },
    methods:{
        handleSizeChange(val){
            this.currentPageSize = val;
        },
        handleCurrentChange(val){
            this.currentPageNo = val
        },
        handleFilter(){
            let tempVal = this.inputValue;
            if(this.inputValue != ""){
                this.tableData = this.originData.filter(item=>{
                    return item[this.selectItem] && item[this.selectItem].toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1
                })
            }else{
                this.tableData = this.originData
            }
            this.currentPageNo = 1;
        },
        handleConfirm(row){
            this.dialogTableVisible = false;
        },
        handleClose(){
            this.dialogTableVisible = false;
            this.$message({
                type:"info",
                message:"已取消操作"
            })
        },
        handleUpdate(row,column){
            this.temp = row
            this.dialogTableVisible = true;
        },
        handleDelete(row,index){
            this.$confirm('此操作将永久删除该行信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                this.tableData.splice(index,1)     
                this.$message({
                    type:"success",
                    message:"删除成功！"
                })
            }).catch(()=>{
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });         
            })
        }
    },
    mounted(){
        // console.log(this.maxHeight)
    },
    created(){
        let _this = this;
        this.$axios.get(this.$dev+"/mock/getData").then((response)=>{
           _this.tableData = response.data.data.tableD;
            _this.originData = _this.tableData.slice();
        })
    }
}
</script>

