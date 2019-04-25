const Sequelize = require('sequelize')
const config = require('./config')

var sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
})
var Pet = sequelize.define('pet',{ //传入pet 默认表名就是pets 第二个参数指定列名和数据类型  第三个参数是额外的配置 
    id:{
        type:Sequelize.STRING(50),
        primaryKey:true
    },
    name:Sequelize.STRING(100),
    gender:Sequelize.BOOLEAN,
    birth:Sequelize.STRING(10),
    createdAt:Sequelize.BIGINT,
    updatedAt:Sequelize.BIGINT,
    version:Sequelize.BIGINT
},{
    timestamps:false
})
var now = Date.now()
// promise写法
// Pet.create({
//     id:'g-'+ now,
//     name:'Gaffey',
//     gender:false,
//     birth:'2007-07-07',
//     createdAt:now,
//     updatedAt:now,
//     version:0
// }).then((p)=>{
//     console.log('created' + JSON.stringify(p))
// }).catch(err=> console.log('failed' + err))

// await 写法
//添加数据
//    var fn=  async ()=>{
//        let res = await Pet.create({
//             id:'g-'+ now,
//             name:'wade',
//             gender:true,
//             birth:'2000-02-09',
//             createdAt:now,
//             updatedAt:now,
//             version:0
//         })
//         console.log(JSON.stringify(res))
//     }
//     fn()
    
    //查询数据
    var fn=  async ()=>{
        let res = await Pet.findAll({
            where:{
                name:'Gaffey'
            }
        })
        for(let p of res){
            console.log(JSON.stringify(p))
        }
         
     }
     fn()