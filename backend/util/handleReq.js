//获取前台传过来的参数要用到ctx.req.addListener 事件监听来解析数据
// https://chenshenhai.github.io/koa2-note/note/request/post.html
function ParseReqData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postData = ''
            ctx.req.addListener('data',(data)=>{
                postData += data
            })
            ctx.req.addListener('end',(end)=>{
                console.log(postData)
                console.log('解析前端传过来的数据')
               resolve( JSON.parse(postData) )
            })
        }catch(err){
            reject(err)
        }
       
    })
}
module.exports = ParseReqData