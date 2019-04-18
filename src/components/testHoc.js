import React,{Component} from 'react'

// const TestHoc = (obj)=>(WrapComponent)=>{
//     return class extends Component{
//         render(){
//             return(
//                 <WrapComponent {...obj}/>
//             )
//         }
//     }
// }
const TestHoc = function(obj){
    return function(WrapComponent){
        //这里要返回一个组件Component ,否则会报错
        //一个组件console出来就是一个 函数 
        return class NewComponent extends Component{
            render(){
                return(
                    <WrapComponent {...obj}/>
                )
            }
        }
    }
}    
    

export default TestHoc