import Mock from 'mockjs'

Mock.mock(/\/login/,{
    'code':0,
    'data':{
        'list|1-10':[
            {
                'id|+1':1,
                'title':'模拟数据@id',
                'status':1
            }
        ],
        'message':'操作成功',
        'token':'ssd02389sdk1y39lazkjkjd-81838',
        'systemDate': new Date().getTime()
    }
})