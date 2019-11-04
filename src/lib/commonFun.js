let publicFun = {};
publicFun.install = function(Vue,options){
    //数组排序(升序)
    Vue.prototype.handleSort = function(tableData){
         tableData.sort((a,b)=>{
            if(!isNaN(a)){
                return a - b;
            }else{
                return a.localeCompare(b)
            }
        })
    },
    //存储本地对象
    Vue.prototype.setLocalStorage = function(storage){
        window.localStorage.setItem(storage.uuid,JSON.stringify(storage));
    },
    //获取本地对象
    Vue.prototype.getLocalStorage = function(storage){
        let Storage = window.localStorage.getItem(storage.uuid);
        if(!Storage){
            return storage;
        }
        return Object.assign(storage,JSON.parse(Storage));
    }
};

export default publicFun;