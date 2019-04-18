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
const TestHoc = function(WrapperComponent){
   return class TestHoc1 extends Component{
       render(){
           console.log(this)
           return(
               <WrapperComponent area='gaungzhou' {...this.props}/>
           )
       }
   }
}    
    

export default TestHoc