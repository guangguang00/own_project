import Home from '../components/home'
import Product from '../components/product'
import Personal from '../components/personal'
import Sales from '../components/sales'
import Login from '../components/login/'

export default [
    {path:'/',name:'Home',component:Home,auth:true},
    {path:'/home',name:'Home',component:Home},
    {path:'/personal',name:'Personal',component:Personal,auth:true},
    {path:'/product',name:'Product',component:Product,auth:true},
    {path:'/sales',name:'Sales',component:Sales,auth:true},
    {path:'/login',name:'Login',component:Login}
]