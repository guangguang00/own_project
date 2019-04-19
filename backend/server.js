const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const route = require('./router/route')
var cors = require('koa2-cors')

app.use(cors())
app.use(route['routes']());


app.listen(9000,()=>{
    console.log('starting at port 9000')
})