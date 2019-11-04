export default {
    "pagination" : function(data,pageNo,pageSize){
        let dataList = [];
        let arrNum = (pageNo-1)*pageSize;
        let arrs = pageNo*pageSize;
        for(arrNum;arrNum<arrs;arrNum++){
            dataList.push(data[arrNum])
        }
        return dataList
    },
    "keepTwoNum" : function(val){
        if(val != null && val != ""){
            let num = Number(val)
            return num.toFixed(2)
        }
    }
}

