import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button} from 'antd'

//引入personal对应需要的action
import {register} from './action'

// Component 是一个函数
class Personal extends Component {
    state = {
        alertStatus: false, //弹框状态
        alertTip: '', //弹框提示文字
      }
    //初始化数据，显示所有的商品
    initData = props => {
        console.log(1111)
    }
    componentWillMount(){
        this.initData()
        //调用了定义在action里面的方法
        
      
    }

    handleClick(){
        console.log('点击了按钮')
        this.props.register('yang','123456')
    }
    render(){
        // const {name} = this.props.formData
        console.log(this.props,'render')
        return(
            <div>
                <h1>这是个人中心的主页</h1>
                <h2>这是内容</h2>
                <Button type="primary" onClick={this.handleClick.bind(this)}>点击发送请求</Button>
                <div>{this.props.showLoading.loading}</div>
            </div>
        )
    }
}
const mapStateToProps = state => {
  
    const {formData,showLoading} = state
    return {formData,showLoading}
    
}
//绑定actions里面的方法 到 props
//一般是在页面引入需要绑定的action，然后通过connect来绑定它们
const mapDispatchToProps = dispatch => ({
    register: bindActionCreators(register, dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(Personal)
