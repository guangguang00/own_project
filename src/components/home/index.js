import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {  clearData ,receiveData} from './action';
import testHoc from '../testHoc'
import testHoc1 from '../testHoc1'
import Layout from '../../common/layout'
import {post} from '../../config/fetch'
import api from '../../config/api'
// Component 是一个函数
@testHoc({path:'/home'})
@testHoc1
class Home extends Component {
    state = {
        alertStatus: false, //弹框状态
        alertTip: '', //弹框提示文字
        // leftData:[{name:'zhang'},{name:'yang'},{name:'wu'}],
        // rightData:{age:'199',area:'guanghzhou'},
        leftData:[],
        rightData:{}
      }
    static defaultProps = {
        age:'18'
    }
    //初始化数据，显示所有的商品
    initData = props => {
        
       post(api.blog,{name:'yang',psd:'123456',route:'/blog'}).then(res=>{
           console.log(res,'home请求回来的数据')
           this.setState({
            leftData:res
           })
       })
    }
    componentWillMount(){
        this.initData()
        console.log(this.props,'props的值')
        
    }
    componentDidMount(){
        
    }
    render(){
      
        return(
            <Layout menuData={this.state.leftData} content={this.state.rightData} {...this.props}/>
        )
    }
}
// export default Home
//将store里面的state绑定到props里面 ,绑定reducer返回的值
const mapStateToProps = state => {
    console.log(state,'home里面的store的state')
    const {formData,showLoading} = state
    return {formData,showLoading}
}
//绑定actions里面的方法 到 props
//一般是在页面引入需要绑定的action，然后通过connect来绑定它们
const mapDispatchToProps = dispatch => ({
    clearData: bindActionCreators(clearData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)
