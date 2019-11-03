import Mock from 'mockjs';

export default {
    getData : config =>{
        return Mock.mock({
            'data':{
                'code':0,
                'tableD|100':[
                    {
                        'userName':'@cname',
                        'date':"@date",
                        "address":"@county(true)",
                        "age|1-10":10,
                        "bloodType|1":["A","B","AB","O"]
                    }
                ]
            }
        })
    },
    getAreaData:config =>{
        return Mock.mock({
            'data|10':[
                {
                    'areaName':"@region"
                }
            ],
            'dateData|10':[
                {
                    'date':"@date('yyyy')"
                }
            ]
        })
    }
}