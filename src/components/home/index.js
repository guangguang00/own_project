import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {  clearData ,receiveData} from './action';
import testHoc from '../testHoc'
import testHoc1 from '../testHoc1'
import Layout from '../../common/layout'
// Component 是一个函数
@testHoc({name:'zhang'})
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
        setTimeout(()=>{
            this.setState({
                leftData:[{name:'zhang'},{name:'yang'},{name:'wu'},{name:'111111'},{name:'22'},{name:'3'},{name:'444'}],
                rightData:{age:'199',area:'guanghzhou'}
            })
        },2000)
    }
    componentWillMount(){
        this.initData()
        console.log(this.props,'props的值')
        
    }
    componentDidMount(){
        
    }
    render(){
      
        return(
            // <div>
            //     <h1>这是标题</h1>
            //     <h2>这是内容</h2>
            //     <h1>{this.props.name}</h1>
            //     <h1>{this.props.area}</h1>
            // </div>
            <Layout menuData={this.state.leftData} content={this.state.rightData} />
        )
    }
}
// export default Home
//将store里面的state绑定到props里面 ,绑定reducer返回的值
const mapStateToProps = state => {
    console.log(state,'home里面的state')
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
