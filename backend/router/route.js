const Router = require('koa-router')
let route = new Router()
let ParseReqData = require('../util/handleReq')
let DBquery = require("../util/lib/mysql")

route.get('/',async(ctx)=>{
    let html = `<h1>首页</h1>`
    ctx.body = html
})
route.get('/404',async(ctx)=>{
    let html = `<h1>404</h1>`
    ctx.body = html
})
route.get('/soSummary',async(ctx)=>{
    ctx.body = `<h1> 这是 SO Summary的页面</h1>`
})
route.post('/ifufullment/query',async(ctx)=>{
    ctx.body = `<h1> 这是test的页面</h1>`
})
route.post('/login',async(ctx)=>{
    await ParseReqData(ctx).then(res=>{
        if(res.name == 'yang' && res.psd == "123456"){
            ctx.body = {
                statusCode:'S',
                data:1
            } 
        }else{
            ctx.body = {
                statusCode:'E',
                data:0
            } 
        }
    })
    // ctx.body = 'S'
})
route.post('/dosummary',async(ctx)=>{
    // ParseReqData(ctx).then(res=>{
      
    // }).then(res=>{
    //   let lastRes = ''
    //   DBquery.findDataByName(res.name).then(data=>{
    //     lastRes = data
    //   })
    //   return Promise.resolve(lastRes)
    // }).then(res=>{
    //   console.log(res)
     
    // })
    await  ParseReqData(ctx).then(DBquery.findDataByName).then(res=>{
        console.log(res,'查询数据库返回的数据')
        console.log(2222222222)
        ctx.body = res
      })
  
    
    
    
})
function handleAllPromise(){

}
module.exports = route