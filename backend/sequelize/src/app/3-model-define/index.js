const sequelize = require('sequelize')
const db = require('../../db')

const {
    INTEGER,
    STRING,
    DATE,
    NOW,
    JSON
} = sequelize 
//定义一个账号
const Account = db.define(
    'account',{
        //id sequelize会默认自动生成一个自增id
        id:{
            type:INTEGER,
            autoIncrement:true,
            //作为主键
            primaryKey:true,
        },
        // 账号Id为一个整型，且不能为空
        accountId:{
            type:INTEGER.UNSINGED,
            allowNull:false,
            //账号id需要唯一性 
            unique:true,
        },
        //账号名称 字符串 范围是4-32
        accountName:{
            //如果不指定 STRING 长度 则默认是255
            type:STRING(32),
            validate:{
                //限制长度范围
                min:4,
                max:32,
            },
            //账号需要唯一性 登录时候使用
            unique:true,
        },
        //密码
        password:{
            type:STRING(128),
            allowNull:false,
        },
        //昵称
        nickName:{
            type:STRING(32),
            validate:{
                min:4,
                max:32,
            },
            //假设昵称后要加上id值
            get(){
                const id = this.getDataValue('id')
                return this.getDataValue('nickName') + '-' + id;
            },
        },
        //邮箱
        email:{
            type:STRING(64),
            allowNull:false,
            validate:{
                // 格式必须为邮箱格式
                isEmail:true,
            },
            //set 假设数据库中存储的邮箱都要是大写的 可以在此处改写
            set(val){
                this.setDataValue('email',val.toUpperCase())
            },
        },
        //注册日期 (实际上色确立则 默认会自动生成一个 createdAt字段)
        registerAt:{
            type:DATE,
            defaultValue:NOW,
        },
        //属性 这里用JSON格式写入
        profile:{
            type:JSON,
        },
    },{
        getterMethods:{
            //自定义函数 brief 返回改账号的简要信息
            brief(){
                return `${this.accountId} ${this.accountName} ${this.nickName}`;
            },
        },
        setterMethods:{},
        //classMethods 和 instanceMethods 在版本A被移除
        //定义 类 级别的函数 可以用Account调用
        classMethods:{
            getCMethod(){
                return 'classMethods';
            }
        },
        //定义 实例 级别的函数 ，用 account调用
        instanceMethods:{
            getIMethod(){
                return 'instanceMethods';
            }
        },
        //也可以在 src/db/index中定义全局的函数
        //设置为false之后，将不会自动加上createdAt，updatedAt这两个字段
        timestamps:true,
        //设置为true之后 ，自动增加的字段就会用下划线命名 created_at updaated_at
        underscored:true,
        //设置将date 来表示创建时间
        createdAt:'date',
        //不要updateAt这个字段
        updatedAt:false,
        //为true 不会真正删除数据 而是设置deletedAt
        paranoid:true,
        //也可以重命名deletedAt
        deletedAt:'deleteTime',
         
        //定义表名 默认会生成一个 accounts的表
        tableName:'account',
        //写表注释
        comment:'账号表',

        //可以在定义 字段的时候添加索引 不过在这个地方加索引看的更清晰
        indexes:[
            //email需要唯一
            {
                unique:true,
                fields:['email']
            },
            //创建一个 符合索引
            {
                //默认名字 [table]_[fields]
                name:'select_index',
                fields:['accountName','email','password']
            }
        ]
    }
)

const createTable = async ()=>{
    await Account.sync(
        {
            force:true,
        }
    )
}
(
    async () => {
        console.log('------------ createTable')
        await createTable()
    }
)()